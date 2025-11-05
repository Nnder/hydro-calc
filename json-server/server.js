const axios = require("axios");
const xml2js = require("xml2js");
const fs = require("fs");
const { spawn } = require("child_process");

function fixName(name) {
  try {
    return name.replaceAll(" ", "-").replaceAll("/", "-").toLowerCase();
  } catch (e) {
    console.log(name, e);
  }
}

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

// Функция для парсинга и записи в db.json (с атомарной записью, отдельным массивом offers и картинками в категориях по новой логике)
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
      link: fixName(cat._ || ""),
      parentId: cat.$.parentId ? parseInt(cat.$.parentId) : null,
      offers: [],
    }));

    console.log(`Всего категорий: ${allCategories.length}`);

    const categoryMap = {};
    allCategories.forEach((cat) => {
      categoryMap[cat.id] = cat;
    });

    const rootCategoryIds = [156196, 156241];
    let allRelevantIds = getChildCategories(
      allCategories,
      rootCategoryIds,
      categoryMap
    );

    // Исключаем указанные категории и их дочерние
    const excludedIds = [
      196612, 156254, 156253, 156252, 165125, 165126, 172497, 156242, 180129,
      176533, 156259, 156251, 199455, 185132,
    ];
    const idsToExclude = new Set();
    excludedIds.forEach((excludedId) => {
      const descendants = getChildCategories(
        allCategories,
        [excludedId],
        categoryMap
      );
      descendants.forEach((id) => idsToExclude.add(id));
    });
    allRelevantIds = allRelevantIds.filter((id) => !idsToExclude.has(id));

    const leafCategoryIds = allRelevantIds.filter((id) => {
      return !allRelevantIds.some(
        (otherId) =>
          categoryMap[otherId] && categoryMap[otherId].parentId === id
      );
    });

    const categories = allCategories.filter((cat) =>
      allRelevantIds.includes(cat.id)
    );

    const offersData = result.yml_catalog.shop.offers.offer || [];
    console.log(`Всего офферов: ${offersData.length}`);

    let offersAdded = 0;
    let offersSkipped = 0;
    const offers = []; // Отдельный массив для всех офферов

    offersData.forEach((offer) => {
      const offerObj = {
        id: parseInt(offer.$.id) || null,
        available: offer.$.available === "true",
        link: "product/" + fixName(offer.name ? offer.name : ""),
        url: offer.url ? offer.url._ : null,
        price: offer.price,
        currencyId: offer.currencyId ? offer.currencyId._ : "RUB",
        categoryId: parseInt(offer.categoryId),
        pictures: [],
        name: offer.name ? offer.name : "",
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
        offerObj.categoryName = categoryMap[catId].name; // Добавляем имя категории
        categoryMap[catId].offers.push(offerObj); // Добавляем в категорию
        offers.push(offerObj); // Добавляем в общий массив offers
        offersAdded++;
      } else {
        offersSkipped++;
      }
    });

    // Сначала присваиваем картинки всем категориям (двухпроходно)
    categories.forEach((cat) => {
      if (cat.offers && cat.offers.length > 0) {
        const firstOffer = cat.offers[0];
        cat.image =
          firstOffer.pictures && firstOffer.pictures.length > 0
            ? firstOffer.pictures[0]
            : "0000000";
      } else {
        cat.image = "";
      }
    });

    // Теперь для категорий без image (родителей) присваиваем из первой дочерней
    categories.forEach((cat) => {
      if (!cat.image) {
        const childCats = categories.filter((c) => c.parentId === cat.id);
        const firstChildWithImage = childCats.find((c) => c.image);
        if (firstChildWithImage) {
          cat.image = firstChildWithImage.image;
        }
      }
    });

    // Теперь создаём children с image (поскольку картинки уже присвоены)
    categories.forEach((cat) => {
      cat.children = allCategories
        .filter((c) => c.parentId === cat.id && allRelevantIds.includes(c.id))
        .map((c) => ({
          id: c.id,
          name: c.name,
          parentId: c.parentId,
          link: c.link,
          image:
            c.image ||
            "https://tss.ru/upload/iblock/91e/p6go06tmrgmkqr06jl3b3mh7yuqdv0jq.jpg", // Теперь c.image уже присвоено!
        }));
    });

    console.log(
      `Офферов добавлено: ${offersAdded}, пропущено: ${offersSkipped}`
    );

    const output = { categories, offers }; // Теперь с отдельным массивом offers и картинками в категориях
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
