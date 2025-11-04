const axios = require("axios");
const xml2js = require("xml2js");
const fs = require("fs");
const { spawn } = require("child_process");

// Функция для рекурсивного сбора дочерних категорий (без изменений)
function getChildCategories(allCategories, parentIds, categoryMap) {
  const children = [];
  parentIds.forEach((parentId) => {
    allCategories.forEach((cat) => {
      if (cat.parentId === parentId) {
        children.push(cat.id);
      }
    });
  });
  if (children.length === 0) return parentIds;
  return parentIds.concat(
    getChildCategories(allCategories, children, categoryMap)
  );
}

// Функция для парсинга и записи в db.json (с атомарной записью и отдельным массивом offers)
async function parseYmlToJson() {
  try {
    console.log("Начинаем парсинг XML...");
    const response = await axios.get(
      "https://www.tss.ru/bitrix/catalog_export/yandex_800463.xml",
      {
        responseType: "arraybuffer",
        timeout: 30000,
      }
    );

    const parser = new xml2js.Parser({
      explicitArray: false,
      trim: true,
      normalize: true,
    });

    const result = await parser.parseStringPromise(response.data);

    const allCategoriesData = result.yml_catalog.shop.categories.category || [];
    const allCategories = allCategoriesData.map((cat) => ({
      id: parseInt(cat.$.id),
      name: cat._ || "",
      parentId: cat.$.parentId ? parseInt(cat.$.parentId) : null,
      offers: [],
    }));

    console.log(`Всего категорий: ${allCategories.length}`);

    const categoryMap = {};
    allCategories.forEach((cat) => {
      categoryMap[cat.id] = cat;
    });

    const rootCategoryIds = [156196, 156241];
    const allRelevantIds = getChildCategories(
      allCategories,
      rootCategoryIds,
      categoryMap
    );
    const leafCategoryIds = allRelevantIds.filter((id) => {
      return !allRelevantIds.some(
        (otherId) =>
          categoryMap[otherId] && categoryMap[otherId].parentId === id
      );
    });

    const categories = allCategories.filter((cat) =>
      allRelevantIds.includes(cat.id)
    );

    // Добавляем children
    categories.forEach((cat) => {
      cat.children = allCategories
        .filter((c) => c.parentId === cat.id && allRelevantIds.includes(c.id))
        .map((c) => ({
          id: c.id,
          name: c.name,
          parentId: c.parentId,
        }));
    });

    const offersData = result.yml_catalog.shop.offers.offer || [];
    console.log(`Всего офферов: ${offersData.length}`);

    let offersAdded = 0;
    let offersSkipped = 0;
    const offers = []; // Отдельный массив для всех офферов

    offersData.forEach((offer) => {
      const offerObj = {
        id: parseInt(offer.$.id) || null,
        available: offer.$.available === "true",
        url: offer.url ? offer.url._ : null,
        price: offer.price,
        currencyId: offer.currencyId ? offer.currencyId._ : "RUB",
        categoryId: parseInt(offer.categoryId),
        pictures: [],
        name: offer.name,
        description: offer.description ? offer.description._ : "",
        params: {},
      };

      if (offer.picture) {
        if (Array.isArray(offer.picture)) {
          offerObj.pictures = offer.picture.map((pic) => pic);
        } else {
          offerObj.pictures = [offer.picture];
        }
      }

      if (offer.param) {
        if (Array.isArray(offer.param)) {
          offer.param.forEach((param) => {
            offerObj.params[param.$.name] = param._ || "";
          });
        } else {
          offerObj.params[offer.param.$.name] = offer.param._ || "";
        }
      }

      const catId = offerObj.categoryId;
      if (
        catId &&
        !isNaN(catId) &&
        categoryMap[catId] &&
        leafCategoryIds.includes(catId)
      ) {
        categoryMap[catId].offers.push(offerObj); // Добавляем в категорию
        offers.push(offerObj); // Добавляем в общий массив offers
        offersAdded++;
      } else {
        offersSkipped++;
      }
    });

    console.log(
      `Офферов добавлено: ${offersAdded}, пропущено: ${offersSkipped}`
    );

    const output = { categories, offers }; // Теперь с отдельным массивом offers
    const jsonData = JSON.stringify(output, null, 2);

    // Атомарная запись: сначала в temp-файл, потом переименование
    fs.writeFileSync("db_temp.json", jsonData, "utf8");
    fs.renameSync("db_temp.json", "db.json");
    console.log("db.json обновлён атомарно!");
    return output;
  } catch (error) {
    console.error("Ошибка парсинга:", error.message);
  }
}

// Основная функция: парсим, запускаем json-server, и обновляем каждые 12 часов
async function main() {
  // Первый парсинг
  await parseYmlToJson();

  // Запускаем json-server с --watch
  const jsonServer = spawn(
    "npx",
    [
      "json-server",
      "db.json",
      "--watch",
      "--port",
      "3001",
      "--host",
      "localhost",
    ],
    {
      stdio: "inherit",
    }
  );

  jsonServer.on("error", (err) => {
    console.error("Ошибка запуска json-server:", err);
  });

  console.log(
    "Json-server запущен на порту 3001 с --watch. Он будет автоматически перечитывать db.json при изменениях."
  );

  // Обновляем каждые 12 часов
  setInterval(async () => {
    console.log("Время обновления db.json...");
    await parseYmlToJson();
    console.log("Обновление завершено. Json-server подхватил изменения.");
  }, 43200000);
}

// Запускаем
main();
