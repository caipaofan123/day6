import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css"
// axios.defaults.baseURL='http://123.57.109.30:3006'
axios.defaults.baseURL=' https://www.escook.cn'
Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
