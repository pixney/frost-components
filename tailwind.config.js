module.exports = {
  content: ['./src/**/*.{html,js}'],
  mode: 'jit',
  safelist: [],
  theme: {
    extend: {}
  },
  plugins: [
    require('./src/plugins/tailwind.scroller'),
    require('./src/plugins/tailwind.hamburger'),
    require('./src/plugins/tailwind.navigation'),
    require('./src/plugins/tailwind.mobileNav')
  ]
}
