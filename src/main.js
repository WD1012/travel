import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'lib-flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
