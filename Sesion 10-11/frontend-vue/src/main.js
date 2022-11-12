import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules/bootswatch/dist/flatly/bootstrap.css';
import '../node_modules/vue-jquery/dist/vueJquery.js';

createApp(App).use(router).mount('#app')
