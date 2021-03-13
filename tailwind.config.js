const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        textColor: {
          100: '#154c88',
          200: '#7dd343',
        },
        background: {
          100: '#f7f8f9',
          200: '#eef0f3',
        },
      },
    },
  },
  variants: { cursor: ['responsive', 'hover', 'focus'] },
  plugins: [require('@tailwindcss/ui')],
};
