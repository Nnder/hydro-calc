// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  sourcemap: false,
  modules: [
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/seo',
    '@nuxtjs/robots',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-swiper',
    '@nuxtjs/google-fonts',
    'nuxt-schema-org',
    'nuxt-aos',
    // '@dargmuesli/nuxt-cookie-control',
  ],

  vite: {
    build: {
      chunkSizeWarningLimit: 500, // Лимит в КБ; по умолчанию 500
    },
  },

  icon: {
    provider: 'iconify',
  },

  // experimental: {
  //   payloadExtraction: false, // отключаем генерацию _payload.json
  // },

  sitemap: {
    hostname: 'https://athydro.ru/',
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date().toISOString(),
    },
    routes: [
      '/',
      '/contacts',
      '/about',
      '/delivery',
      '/policy',
      '/policy2',
      '/postavshkam',
      '/gidrolinii',
      '/izgotovlenie-hydrocylindrov',
      '/proektirovanie-izgotovlenie-hydraulic-stantici',
      '/rukava-visokogo-davlenia-rvd',
      '/remont-hydraulic-cylinders',
      '/remont-hydraulic-motors',
      '/remont-svarkoy',
      '/remont-nasosov-pumps',
      '/remont-kovshey',
      '/remont-kovshey/kovshi',
      '/remont-kovshey/hydrovrashateli',
      '/remont-kovshey/hydromoloty',
      '/sell/sell-komplektushie-rvd',
      '/sell/sell-komplektushie-rvd/Фланец',
      '/sell/sell-komplektushie-rvd/Уплотнение',
      '/sell/sell-komplektushie-rvd/Быстросъемник',
      '/sell/sell-komplektushie-rvd/Оболочки',
      '/sell/sell-komplektushie-rvd/Переходники',
      '/sell/sell-komplektushie-rvd/Заглушки',
      '/sell/sell-gidronasosov',
      '/sell/sell-gidronasosov/Аксиально-поршневые',
      '/sell/sell-gidronasosov/Радиально-поршневые',
      '/sell/sell-gidronasosov/Шестеренные',
      '/sell/sell-gidronasosov/Пластинчатые',
      '/sell/sell-gidrocilindrov',
      '/sell/sell-gidrocilindrov/',
      '/sell/sell-gidrocilindrov/Сильфоны',
      '/sell/sell-gidrocilindrov/Пальцы',
      '/sell/sell-gidrocilindrov/Втулки',
      '/sell/sell-gidrocilindrov/Гидролинии',
      '/sell/sell-gidrocilindrov/ГСМ',
      '/sell/sell-filtrov',
      '/sell/sell-filtrov/Металические-сетки',
      '/sell/sell-filtrov/Бумажные-фильтры',
      '/sell/sell-filtrov/Синтетические',
      '/sell/sell-filtrov/Фибра-стекловолокна',
      '/sell',
    ],
  },

  site: { url: 'athydro.ru' },

  robots: {
    UserAgent: '*',
    Disallow: '',
    CrawlDelay: 10,
    Sitemap: ['https://athydro.ru/sitemap.xml'],
  },

  // ogImage: { enabled: false },

  // image: {
  //   provider: 'ipx',
  //   ipx: {},
  // },

  googleFonts: {
    families: {
      Montserrat: [400, 500, 600, 700, 800],
    },
    display: 'swap',
  },

  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  },

  // runtimeConfig: {
  //   public: {
  //     fetch: {
  //       baseURL: process.env.BACKEND_URL,
  //       credentials: 'include',
  //     },
  //     backendUrl: process.env.BACKEND_URL || 'http://localhost:8000',
  //     sanctum: {
  //       baseUrl: process.env.BACKEND_URL || 'http://localhost:8000',
  //       mode: 'cookie',
  //       userStateKey: 'sanctum.user.identity',
  //       endpoints: {
  //         csrf: '/sanctum/csrf-cookie',
  //         login: '/api/auth/verify-code',
  //         logout: '/api/auth/logout',
  //         user: '/api/user',
  //       },
  //       csrf: {
  //         cookie: 'XSRF-TOKEN',
  //         header: 'X-XSRF-TOKEN',
  //       },
  //       redirect: {
  //         onLogin: '/',
  //         onLogout: '/',
  //         home: '/',
  //       },
  //       credentials: 'include',
  //     },
  //   },
  // },

  // routeRules: {
  //   '/products/**': {
  //     isr: 600,
  //     cache: {
  //       swr: true,
  //     },
  //   },
  //   '/news': { isr: 600 },
  //   '/news/**': { isr: 600 },
  //   '/category': { isr: 600 },
  //   '/category/**': { isr: 600 },
  //   '/': { isr: 600 },
  //   '/about': { static: true },
  //   '/contacts': { static: true },
  //   '/account/**': { ssr: true },
  // },

  // nitro: {
  //   compressPublicAssets: false,
  //   prerender: {
  //     crawlLinks: false,
  //     routes: ['/about', '/contacts'],

  //     ignore: [
  //       // Игнорируем файлы
  //       '/**/*.js',
  //       '/**/*.map',
  //       '/**/*.json',

  //       // Игнорируем API-маршруты
  //       '/api/**',

  //       // Динамические маршруты с потенциально битыми параметрами
  //       '/**/undefined',
  //       '/**/[object%20Object]',
  //       '/**/null',
  //       '/**/undefined/**',

  //       // Тестовые и служебные пути
  //       '/**/test/**',
  //       '/**/dev/**',
  //       '/**/admin/**',
  //     ],
  //     // failOnError: false,
  //   },

  //   storage: {
  //     'cache:isr': {
  //       driver: 'fs', // Храним кэш на диске
  //       base: './.nitro/cache/isr',
  //     },
  //   },
  //   // devProxy: {
  //   //   '/api': {
  //   //     target: process.env.BACKEND_URL || 'http://localhost:8000',
  //   //     changeOrigin: true,
  //   //     cookieDomainRewrite: {
  //   //       '*': '',
  //   //     },
  //   //     headers: {
  //   //       'X-Forwarded-Host': process.env.BACKEND_URL?.split('//')[1] || 'localhost:8000',
  //   //       'X-Forwarded-Proto': 'http',
  //   //       'Content-Type': 'application/json',
  //   //       Accept: 'application/json',
  //   //     },
  //   //     secure: false,
  //   //     // bypass: req => {
  //   //     //   // Полный путь без домена
  //   //     //   const fullPath = req.url || ''

  //   //     //   // Разделяем путь и query-параметры
  //   //     //   const [path] = fullPath.split('?')

  //   //     //   // Маршруты, которые должны обрабатываться локально
  //   //     //   const localRoutes = [
  //   //     //     '/api/search', // Будет обработан server/api/search.ts
  //   //     //     // '/api/another-local-route',
  //   //     //   ]

  //   //     //   // Проверяем совпадение с локальными маршрутами
  //   //     //   if (localRoutes.some(route => path === route)) {
  //   //     //     console.log(`[PROXY] Bypassing: ${fullPath} -> local Nitro handler`)
  //   //     //     return fullPath // Возвращаем оригинальный URL
  //   //     //   }

  //   //     //   console.log(`[PROXY] Forwarding: ${fullPath} -> ${this.target}`)
  //   //     //   return null // Продолжаем проксирование
  //   //     // },
  //   //   },
  //   //   '/sanctum': {
  //   //     target: process.env.BACKEND_URL || 'http://localhost:8000',
  //   //     changeOrigin: true,
  //   //     cookieDomainRewrite: {
  //   //       '*': '',
  //   //     },
  //   //     secure: false,
  //   //   },
  //   // },
  // },

  // Настройка cookie для SSR

  // routeRules: {
  //   '/': {
  //     isr: true, // Включаем ISR
  //     prerender: true, // Предварительный рендеринг при сборке
  //   },
  // },

  runtimeConfig: {
    mail: {
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
    public: {
      mailFrom: process.env.MAIL_FROM_ADDRESS,
      baseURL: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:3000' : 'https://hydro-calc.vercel.app',
    },
  },

  routeRules: {
    '/': { prerender: true },
    '/about': { prerender: true },
    '/contacts': { prerender: true },
    '/delivery': { prerender: true },
    '/policy': { prerender: true },
    '/policy2': { prerender: true },
    '/postavshkam': { prerender: true },
    '/gidrolinii': { prerender: true },
    '/izgotovlenie-hydrocylindrov': { prerender: true },
    '/proektirovanie-izgotovlenie-hydraulic-stantici': { prerender: true },
    '/rukava-visokogo-davlenia-rvd': { prerender: true },
    '/remont-hydraulic-cylinders': { prerender: true },
    '/remont-hydraulic-motors': { prerender: true },
    '/remont-svarkoy': { prerender: true },
    '/remont-nasosov-pumps': { prerender: true },
    '/remont-kovshey': { prerender: true },
    '/remont-kovshey/kovshi': { prerender: true },
    '/remont-kovshey/hydrovrashateli': { prerender: true },
    '/remont-kovshey/hydromoloty': { prerender: true },
    '/sell/sell-komplektushie-rvd': { prerender: true },
    '/sell/sell-komplektushie-rvd/Фланец': { prerender: true },
    '/sell/sell-komplektushie-rvd/Уплотнение': { prerender: true },
    '/sell/sell-komplektushie-rvd/Быстросъемник': { prerender: true },
    '/sell/sell-komplektushie-rvd/Оболочки': { prerender: true },
    '/sell/sell-komplektushie-rvd/Переходники': { prerender: true },
    '/sell/sell-komplektushie-rvd/Заглушки': { prerender: true },
    '/sell/sell-gidronasosov': { prerender: true },
    '/sell/sell-gidronasosov/Аксиально-поршневые': { prerender: true },
    '/sell/sell-gidronasosov/Радиально-поршневые': { prerender: true },
    '/sell/sell-gidronasosov/Шестеренные': { prerender: true },
    '/sell/sell-gidronasosov/Пластинчатые': { prerender: true },
    '/sell/sell-gidrocilindrov': { prerender: true },
    '/sell/sell-gidrocilindrov/': { prerender: true },
    '/sell/sell-gidrocilindrov/Сильфоны': { prerender: true },
    '/sell/sell-gidrocilindrov/Пальцы': { prerender: true },
    '/sell/sell-gidrocilindrov/Втулки': { prerender: true },
    '/sell/sell-gidrocilindrov/Гидролинии': { prerender: true },
    '/sell/sell-gidrocilindrov/ГСМ': { prerender: true },
    '/sell/sell-filtrov': { prerender: true },
    '/sell/sell-filtrov/Металические-сетки': { prerender: true },
    '/sell/sell-filtrov/Бумажные-фильтры': { prerender: true },
    '/sell/sell-filtrov/Синтетические': { prerender: true },
    '/sell/sell-filtrov/Фибра-стекловолокна': { prerender: true },
    '/sell/category/**': { ssr: true },
  },

  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: [
        '/',
        '/contacts',
        '/about',
        '/delivery',
        '/policy',
        '/policy2',
        '/postavshkam',
        '/gidrolinii',
        '/izgotovlenie-hydrocylindrov',
        '/proektirovanie-izgotovlenie-hydraulic-stantici',
        '/rukava-visokogo-davlenia-rvd',
        '/remont-hydraulic-cylinders',
        '/remont-hydraulic-motors',
        '/remont-svarkoy',
        '/remont-nasosov-pumps',
        '/remont-kovshey',
        '/remont-kovshey/kovshi',
        '/remont-kovshey/hydrovrashateli',
        '/remont-kovshey/hydromoloty',
        '/sell/sell-komplektushie-rvd',
        '/sell/sell-komplektushie-rvd/Фланец',
        '/sell/sell-komplektushie-rvd/Уплотнение',
        '/sell/sell-komplektushie-rvd/Быстросъемник',
        '/sell/sell-komplektushie-rvd/Оболочки',
        '/sell/sell-komplektushie-rvd/Переходники',
        '/sell/sell-komplektushie-rvd/Заглушки',
        '/sell/sell-gidronasosov',
        '/sell/sell-gidronasosov/Аксиально-поршневые',
        '/sell/sell-gidronasosov/Радиально-поршневые',
        '/sell/sell-gidronasosov/Шестеренные',
        '/sell/sell-gidronasosov/Пластинчатые',
        '/sell/sell-gidrocilindrov',
        '/sell/sell-gidrocilindrov/',
        '/sell/sell-gidrocilindrov/Сильфоны',
        '/sell/sell-gidrocilindrov/Пальцы',
        '/sell/sell-gidrocilindrov/Втулки',
        '/sell/sell-gidrocilindrov/Гидролинии',
        '/sell/sell-gidrocilindrov/ГСМ',
        '/sell/sell-filtrov',
        '/sell/sell-filtrov/Металические-сетки',
        '/sell/sell-filtrov/Бумажные-фильтры',
        '/sell/sell-filtrov/Синтетические',
        '/sell/sell-filtrov/Фибра-стекловолокна',
        '/sell',
      ],
      ignore: ['/api/**', '/sell/category/:'],
    },
  },

  app: {
    head: {
      title: 'Абсолют техно',
      htmlAttrs: {
        lang: 'ru',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [
        {
          innerHTML: `
          (function(m,e,t,r,i,k,a){         m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};         m[i].l=1*new Date();         for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}         k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)     })(window, document,'script','https://mc.webvisor.org/metrika/tag_ww.js?id=105118320', 'ym');      ym(105118320, 'init', {ssr:true, webvisor:true, trackHash:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
        `,
          type: 'text/javascript',
        },
      ],
    },
  },
})
