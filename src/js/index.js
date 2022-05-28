import Alpine from 'alpinejs'
import Scroller from './components/scroller'
import NavigationMobile from './components/navigationMobile'
import '../css/style.css'
window.Alpine = Alpine
Alpine.data('scroller', Scroller)
Alpine.data('navigationMobile', NavigationMobile)
Alpine.start()
