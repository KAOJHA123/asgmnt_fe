import { createApp } from 'vue'
// import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
createApp(App).use(router).mount('#app');
import router from './routes'
