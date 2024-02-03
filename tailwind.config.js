/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clr-dark': '#21222A',
        'clr-light': '#282D35',
        'clr-extra-light': '#61DAFB'
      },

      backgroundImage: {
        'card': "url('assets/largeReactIcon.png')"
      },

      backgroundSize: {
        '16': '7rem'
      }
    },
  },
  plugins: [],
}

//  header  body  li