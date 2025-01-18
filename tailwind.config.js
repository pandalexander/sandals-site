/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};
