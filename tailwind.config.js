/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "hero-height": "calc(100vh - 130px)",
      },
      colors: {
        primaryMain: "#707750",
        primaryDark: "#2D3529",
        baseDark: "#161616",
        baseLight: "#EFEFEF",
        accentTertiary: "#6D6356",
        accentMuted: "#D3CBBE",
        accentLight: "#F4F1EA",
        highlight: "#769499",
        // ...
      },
      fontFamily: {
        personality: ["Cormorant Garamond", "serif"],
        accent: ["PT Serif", "serif"],
        main: ["Open Sans", "sans-serif"],
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50% - 20px))" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 40s linear infinite",
      },
    },
  },
  plugins: [],
};
