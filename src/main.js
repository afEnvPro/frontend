import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import './style.scss'

// require styles
import 'swiper/dist/css/swiper.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
