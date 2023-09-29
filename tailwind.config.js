/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      Poppins: ["Poppins"],
    },
    extend: {
      content: {
        sunDark: "url(/src/assets/Sundark.svg)",
        moonDark: "url(/src/assets/Moondark.svg)",
        moonLight: "url(/src/assets/Moonlight.svg)",
        sunLight: "url(/src/assets/Sunlight.svg)",
      },
    },
  },
  plugins: [],
};
