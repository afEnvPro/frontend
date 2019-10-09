import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import(/* webpackChunkName: "about" */ './views/service.vue')
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import(/* webpackChunkName: "about" */ './views/activity.vue')
    },
    {
      path: '/media',
      name: 'media',
      component: () => import(/* webpackChunkName: "about" */ './views/Media-report.vue')
    },
    {
      path: '/joinUs',
      name: 'joinUs',
      component: () => import(/* webpackChunkName: "about" */ './views/join-us.vue')
    }
  ]
})
