module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: 'jit',
  theme: {
    extend: {},
  },
  plugins: [
    require('./src/plugins/tailwind.scroller'),
  ],
}
