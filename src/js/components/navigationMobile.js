console.log('hello')
export default () => ({
  open: false,
  showSocialMediaLinks: false,
  previousScrollPosition: 0,
  init () {
    console.log('navigation mobile')
  },
  onToggle () {
    if (this.open) {
      this.showSocialMediaLinks = false
      setTimeout(() => {
        this.open = false
        document.documentElement.style.overflow = 'auto'
      }, 0)
    } else {
      document.documentElement.style.overflow = 'hidden'
      this.open = true
      setTimeout(() => {
        this.showSocialMediaLinks = true
        console.log(this.showSocialMediaLinks)
      }, 400)
    }
  },

  // TODO: Cleanup
  onWindowScroll (e) {
    const windowHeight = window.innerHeight
    const barRect = this.$refs.bar.getBoundingClientRect()
    if (window.scrollY > (windowHeight - (barRect.height / 2))) {
      this.$root.classList.add('-navFilled')
      // this.onScrollDown();
    } else {
      this.$root.classList.remove('-navFilled')
    }

    // // Scrolling down
    // if (window.scrollY > this.previousScrollPosition) {
    //     this.onScrollDown();
    // }
    // // Scrolling up
    // else if (window.scrollY <= this.previousScrollPosition) {
    //     this.onScrollUp();
    // }

    this.previousScrollPosition = window.scrollY
  },
  onScrollDown () {

  },
  onScrollUp () {

  }
})
