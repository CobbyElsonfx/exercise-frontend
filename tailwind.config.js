const withMT = require("@material-tailwind/react/utils/withMT");


/** @type {import('tailwindcss').Config} */
module.exports =  withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ropShadow: {
        '3xl': '0 60px 20px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 45px 45px rgba(255, 255,255, 0.12¯¯)',
            '0 45px 65px rgba(245, 255, 255, 0.12)'
        ]
      },
      colors:{
        primary:"#FF6D0C",
        background:"#111827",
        orange: "hsl(26, 100%, 55%)",
        paleOrange: "hsl(25, 100%, 94%)",
        veryDarkBlue: "hsl(220, 13%, 13%)",
        darkGrayishBlue: "hsl(219, 9%, 45%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
        white: "hsl(0, 0%, 100%)"
        // black (with 75% opacity for lightbox background): hsl(0, 0%, 0%)
      }
    },
  },
  plugins: [],
})