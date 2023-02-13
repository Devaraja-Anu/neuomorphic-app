/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBg: "#E0E5EC",
        mainText: "#242f4f",
      },
      backgroundImage: {
        "gradient-radial": "linear-gradient(315deg, #cacaca, #f0f0f0)",
      },

      boxShadow: {
        neoShadowOut: "4px 4px 16px #FFFFFF, -4px -4px 16px #A3B1C6",
        neoShadowOutInvert: "4px 4px 16px #A3B1C6, -4px -4px 16px #FFFFFF",
        neoShadowIn: "inset 2px 2px 4px #FFFFFF, inset -3px -3px 4px #A3B1C6",
        neoShadowInMed:
          "inset 4px 4px 10px #FFFFFF, inset -6px -6px 10px #A3B1C6",

        neoShadowInLg:
          "inset 4px 4px 10px #FFFFFF, inset -6px -6px 18px #A3B1C6",
      },

      transitionTimingFunction:{
        slowdrop:' cubic-bezier(0.1, 0.7, 1.0, 0.1)'
      },

      keyframes: {
        MenuDrop: {
          "0%": { transform: "scale(0)" },
          "80%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation:{
        dropdown:'MenuDrop 300ms ease-in'
      }
    },
  },
  plugins: [],
};

        // 'mainLight': "#FFFFFF",
        // 'mainDark': "#A3B1C6",