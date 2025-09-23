<template>
  <div class="bg-tech-light w-full py-16">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-20" data-aos="fade-up" data-aos-delay="400">
        <div class="flex flex-col lg:flex-row gap-12 items-center">
          <div class="lg:w-1/2">
            <h2
              class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-dark text-center lg:text-left md:text-nowrap"
            >
              О компании ООО "Абсолют Техно"
            </h2>
            <div class="space-y-6 text-neutral-dark leading-relaxed text-sm sm:text-base lg:text-lg" data-aos="fade-up">
              <p>
                <strong class="text-primary-DEFAULT">ООО "Абсолют Техно"</strong> - ведущий поставщик профессионального
                инструмента, строительного оборудования и промышленных решений в России. С 2010 года мы помогаем
                профессионалам и компаниям находить оптимальные технические решения для реализации любых проектов.
              </p>
              <p>
                Наша компания объединяет многолетний опыт, глубокие отраслевые знания и стремление к инновациям,
                предлагая клиентам только проверенное и качественное оборудование от мировых производителей.
              </p>
              <p>
                Сегодня Абсолют Техно - это не просто магазин инструментов, а полноценный Технологический партнер,
                готовый предложить комплексные решения для строительства, производства и ремонтных работ любого
                масштаба.
              </p>
            </div>
          </div>
          <div class="lg:w-1/2">
            <NuxtImg
              src="full_logo_text.svg"
              alt="Шоурум ООО Абсолют Техно"
              class="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div class="mb-20" data-aos="fade-up" data-aos-delay="600">
        <h2 class="text-4xl font-bold mb-12 text-center text-dark">Наши приоритеты</h2>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-md border-t-4 border-hydro-power hover:shadow-lg transition-all">
            <div class="flex items-center">
              <div class="text-hydro-power text-4xl mb-4">✓</div>
              <h3 class="text-xl sm:text-2xl font-bold mb-4 text-dark">Профессионализм</h3>
            </div>

            <p class="text-neutral-dark text-sm sm:text-base lg:text-lg" data-aos="fade-up">
              Мы тщательно отбираем ассортимент, предлагая только проверенные решения. Наши специалисты регулярно
              проходят обучение у производителей, чтобы предоставлять клиентам экспертную консультацию.
            </p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-md border-t-4 border-hydro-power hover:shadow-lg transition-all">
            <div class="flex items-center">
              <div class="text-hydro-power text-4xl mb-4">✓</div>
              <h3 class="text-xl sm:text-2xl font-bold mb-4 text-dark">Инновации</h3>
            </div>

            <p class="text-neutral-dark text-sm sm:text-base lg:text-lg" data-aos="fade-up">
              Мы постоянно следим за тенденциями рынка, внедряем новые Технологии и предлагаем клиентам современные
              решения, повышающие эффективность их работы.
            </p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-md border-t-4 border-hydro-power hover:shadow-lg transition-all">
            <div class="flex items-center">
              <div class="text-hydro-power text-4xl mb-4">✓</div>
              <h3 class="text-xl sm:text-2xl font-bold mb-4 text-dark">Надежность</h3>
            </div>

            <p class="text-neutral-dark text-sm sm:text-base lg:text-lg" data-aos="fade-up">
              Гарантия качества на все товары, официальные поставки от производителей, прозрачные условия
              сотрудничества. Мы дорожим своей репутацией и доверием клиентов.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'О компании',
  meta: [
    {
      name: 'description',
      content: 'Абсолют Техно - компания по продажам,ремонтам,изготовлениям сварочных изделий',
    },
  ],
})
</script>
