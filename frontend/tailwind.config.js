module.exports = {
  mode: "jit",
  purge: ["./src/**/*.html", "./src/**/*.ts"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
