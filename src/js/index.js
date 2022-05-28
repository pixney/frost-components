import Alpine from 'alpinejs'
import Scroller from './components/scroller'
import Navigation from './components/navigation'
import '../css/style.css'
window.Alpine = Alpine
Alpine.data('scroller', Scroller)
Alpine.data('navigation', Navigation)
Alpine.start()
