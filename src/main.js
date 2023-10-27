import Vue from 'vue'
import router from './router'
import store from './store'
import './plugins/vant'
import axios from 'axios'
import vue2Marquee from "vue2-marquee"
import "vue2-marquee/dist/vue2Marquee.css"
import App from './App.vue'

Vue.use(vue2Marquee);
axios.defaults.baseURL = "http://localhost:3000"
axios.defaults.withCredentials = true
// axios.defaults.baseURL = "http://iwenwiki.com:3000/"
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({

  render: h => h(App),
  router,
  store,
}).$mount('#app')
