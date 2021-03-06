module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#97bf0f',
        secondary: '#ff9d13',
        primaryContrast: '#fefefc',
        dark: '#191b1c',
        darkContrast: '#d8d5d1',
        gray: {
          100: '#f1f1f1',
          300: '#c7c7c7',
          900: '#141414',
        },
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tw-elements/dist/plugin')],
};
