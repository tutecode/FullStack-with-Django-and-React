/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-button": '#FFC000'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const extendUnderline = {
        '.underline': {
          'textDecoration': 'underline',
          'text-decoration-color': '#FFC000',
        },
      }
      addUtilities(extendUnderline)
    }
  ],
}

