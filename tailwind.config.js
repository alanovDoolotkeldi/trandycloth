/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-red": "#b91c1c",
        "regal-black": "#242424",
      },
      gridTemplateColumns: {
        'card-layout-lg': '624px calc(100% - 992px) 368px',
        'card-layout-xl': '624px calc(100% - 992px) 368px',
      },
      gridTemplateRows: {
        auto: 'auto', // Кастомное значение
      },
      aspectRatio: {
        none: 'none', // кастомный класс xl:aspect-none
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      boxShadow: {
        custom1: "0 0 25px 5px #3E6AE1",
        "red-shadow": "0px 0px 25px 5px #E11E2440",
        "blue-shadow": "0px 0px 25px 5px #007FFF",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
});
