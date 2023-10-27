import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "home" */ '../views/AboutView.vue')
  // },
  {
    path: '/itemMusic',
    name: 'itemMusic',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "itemMusic" */ '../views/ItemMusic.vue')
  },
  {
    path: '/search',
    name: 'search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  },

  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },

  {
    path: '/user',
    name: 'user',
    // 设置路由守卫
    beforeEnter: (to, from, next) => {
      if (store.state.isLogin == true) {
        next()
      } else {
        next('/login')
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "user" */ '../views/UserView.vue')
  },
  {
    path: '/qrlogin',
    name: 'qrlogin',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "qrlogin" */ '../views/QrLogin.vue')
  },

]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })
// router.beforeEach((to, from) => {
//   if (to.path == '/login') {
//     store.state.isFooter = false
//   } else {
//     store.state.isFooterc = true
//   }
// })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes

})

//配置路由守卫
router.beforeEach((to, from, next) => {//在每次涂油跳转的时候都触发一次
  if (to.path == '/login') {
    store.state.isFooter = false
  } else {
    store.state.isFooter = true
  }
  if (to.matched.length === 0) { // 如果未匹配到路由
    from.name ? next({ name: from.name }) : next('/'); // 如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    next(); // 如果匹配到正确跳转
  }
  // console.log(to)

});

// router.beforeEach((to, from) => {
//   console.log(to.path)
//   if (to.path == '/login') {
//     store.state.isFooterMusic = false
//   } else {
//     store.state.isFooterMusic = true
//   }

// })

export default router
