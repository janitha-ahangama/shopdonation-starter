module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      ccolors: {
        shopGreen: "#369936",
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      screens: {
        '2xl': '1536px', 
        '3xl': '1800px', 
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}