module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontWeight: {
        "montserrat-100": 100,
        "montserrat-400": 400,
        "montserrat-800": 800,
      },
      colors: {
        "custom-orange": { 500: "#FFD52E" },
      },
    },
  },
  plugins: [],
};
