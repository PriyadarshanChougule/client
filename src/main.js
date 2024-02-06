import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@popperjs/core/dist/umd/popper';
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../src/assets/central.css'
createApp(App)
    .use(router)
    .mount('#app')
