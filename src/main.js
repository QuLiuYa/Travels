import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import 'styles/reset.css'
import 'styles/border.css'
import FastClick from 'fastclick'
import 'styles/iconfont.css'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false
// 解决 点击 300 延迟
FastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
