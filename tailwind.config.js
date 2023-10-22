/** @type {import('tailwindcss').Config} */
import tailwindTypography from '@tailwindcss/typography'

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [tailwindTypography],
  content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    'Error.{js,ts,vue}',
    'error.{js,ts,vue}',
  ],
  options: {

  }
};
