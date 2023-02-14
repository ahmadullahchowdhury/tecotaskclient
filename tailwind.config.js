/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mono:['Roboto', 'sans-serif']
      }
    },
  },
  daisyui: {
    themes: [
      
      {
        mytheme: {
          primary: "#a7d4e5",

          secondary: "#db2e8d",

          accent: "#ffccf7",

          neutral: "#1D1C27",

          "base-100": "#EFEFF0",

          info: "#6987D8",

          success: "#106549",

          warning: "#F1C255",

          error: "#FD5E86",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
