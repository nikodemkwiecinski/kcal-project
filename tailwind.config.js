module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        "light-blue": "#6585A3",
        "dark-blue": "#243950",
      },
      minHeight: {
        "9/10": "90vh",
        "1/10": "10vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
