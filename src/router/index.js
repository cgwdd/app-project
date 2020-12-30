import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import Home from '../view/Home'
import Login from '../view/Login'
import Register from '../view/Register'
import Cart from '../view/Cart'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      // redirect: '/home'
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
      // component: (resolve) => require('../view/Home.vue')
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/cart',
      component: Cart
    }
  ]
})
