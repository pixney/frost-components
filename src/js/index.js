import Alpine from 'alpinejs'
import Scroller from './components/scroller'
import '../css/style.css';
window.Alpine = Alpine
Alpine.data('scroller',Scroller)
Alpine.start()