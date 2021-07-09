import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Templates and styles
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// Fontawesome
// Ref: https://stackoverflow.com/a/53580347
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';

createApp(App).use(router).mount('#app')
