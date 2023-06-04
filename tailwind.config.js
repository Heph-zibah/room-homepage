/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url('/src/Assets/mobile-image-hero-1.jpg')",
        "hero-desktop": "url('/src/Assets/desktop-image-hero-1.jpg')",
      },
      fontFamily: {
        league: ["League Spartan", "sans-serif"],
      },
      colors: {
        darkGray: "hsl(0, 0%, 63%)",
        black: "hsl(0, 0%, 0%)",
        white: "hsl(0, 0%, 100%)",
        veryDarkGray: "hsl(0, 0%, 27%)",
      },
    },
  },
  plugins: [],
};
