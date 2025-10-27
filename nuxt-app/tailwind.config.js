import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

export default {
  content: {
    files: [
      './components/*.{js,vue,ts}',
      './layouts/*.vue',
      './pages/*.vue',
      './plugins/*.{js,ts}',
      './shared/**/*.{js,vue,ts}',
      './nuxt.config.{js,ts}',
      './app.vue',
    ],
    extract,
  },
  plugins: [fluid],
  theme: {
    screens,
    fontSize,
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D10026',
          hover: '#B00020',
          active: '#8A0019',
        },
        neutral: {
          light: '#F5F5F5',
          DEFAULT: '#9E9E9E',
          dark: '#424242',
        },
        accent: {
          DEFAULT: '#0077C8',
          hover: '#0062A3',
        },
        white: '#FFFFFF',
        danger: {
          DEFAULT: '#D62828',
          hover: '#B22222',
        },
        dark: '#0D1B2A',
        gray: '#70798C',
        black: '#212121',

        hydro: {
          power: '#2563EB', // Синий (давление)
          steel: '#4B5563', // Металл корпуса
          oil: '#92400E', // Цвет масла
          danger: '#DC2626', // Аварийные элементы
        },
        tech: {
          light: '#F3F4F6', // Светлый фон
          dark: '#111827', // Тёмный фон секций
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        industrial: ['"Orbitron"', 'sans-serif'],
      },
    },
  },
}
