import { createApp } from 'vue'
import App from './App.vue'

// Templates and styles
import 'bootstrap'

import router from './router'

createApp(App).use(router).mount('#app')
