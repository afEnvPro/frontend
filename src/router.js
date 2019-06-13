import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import activity from './views/activity.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/service',
      name: 'service',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/service.vue')
    },
    {
      path: '/activity',
      name: 'activity',
      redirect: '/activity/activity-list',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: activity,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'activity-list',
          name: 'activity-list',
          component: () => import(/* webpackChunkName: "about" */ './views/list.vue'),
          meta: { activeMenu: '/activity/list' },
        },
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'activity-details',
          name: 'activity-details',
          component: () => import(/* webpackChunkName: "about" */ './views/Details.vue'),
          meta: { activeMenu: '/activity/list' }
        }
      ]
    },
    {
      path: '/media',
      name: 'media',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Media-report.vue'),
      redirect: '/media/media-list',
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'media-list',
          name: 'media-list',
          component: () => import(/* webpackChunkName: "about" */ './views/list.vue'),
          meta: { activeMenu: '/media/list' },
        },
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'media-details',
          name: 'media-details',
          component: () => import(/* webpackChunkName: "about" */ './views/Details.vue'),
          meta: { activeMenu: '/media/list' },
        }
      ]
    },
    {
      path: '/joinUs',
      name: 'joinUs',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/join-us.vue')
    }
  ]
})
