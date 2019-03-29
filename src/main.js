import Vue from 'vue'
import App from './App.vue'

import routers from './router/routers'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes: routers,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        return { x: 0, y: 0 }
    }
})

new Vue({
  el: '#app',
	router,
  render: h => h(App)
})
