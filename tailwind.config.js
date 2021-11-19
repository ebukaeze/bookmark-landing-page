module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#fA5757",
        "bookmarK-blue": "#5368DF",
        "bookmark-grey": "#9194A1",
        "bookmark-white": "#f7f7f7",
        "bookmark-dark-blue": "hsl(229, 31%, 21%)",
      }
    },
    container: {
      center: true,
      padding: "1rem",
      screens:{
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
