module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        "light-blue": "#6585A3",
        "extra-light-blue": "#CED9E4",
        "dark-blue": "#243950",
        "light-white": "#F5F5F5",
      },
      minHeight: {
        "9/10": "90vh",
        "1/10": "10vh",
      },
      height: {
        "9/10": "90vh",
        half: "50vh",
      },
      width: {
        "1/4": "40vw",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
