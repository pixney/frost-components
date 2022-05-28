module.exports = {
  content: ['./src/**/*.{html,js}'],
  mode: 'jit',
  safelist: ['c-hamburger', 'c-hamburger__line', 'c-hamburger__line:after'],
  theme: {
    extend: {}
  },
  plugins: [
    require('./src/plugins/tailwind.scroller'),
    require('./src/plugins/tailwind.hamburger')
  ]
}
