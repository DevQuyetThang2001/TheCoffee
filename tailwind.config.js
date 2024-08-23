/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      screens: {
        'xs': '480px'
      },
      fontFamily: {
        Karla: ['Karla','sans-serif']
      },
      colors: {
        'coffee': {
          50: "E8D6D0",
          200: '#C89F94',
          400: "#A25F4B",
          600: "#744838",
        }
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn : {
          from: {opacity: 0},
          to : {opacity: 1}
        }
      },
      animation: {
        'slideDown': 'slideDown .4s linear',
        'fadeIn': 'fadeIn .4s ease-in-out'
      },
      backgroundImage: {
        'bg-slide-img': 'url("./img/bg-coffee.jpg")'
      }
    },
  },
  plugins: [],
}