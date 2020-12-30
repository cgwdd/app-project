import Vue from 'vue'
import Vuex from 'vuex'

import { getFilterArray } from '../utils/array.js'
import product_data from '../utils/product.js'
import users_data from '../utils/users.js'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    productList: [],
    cartList: [],
    username:'',
    cartCount: 0
    
  },
  getters: {
    brands: state => {
      const brands = state.productList.map(item => item.brand)
      return getFilterArray(brands)
    },
    colors: state => {
      const colors = state.productList.map(item => item.color)
      return getFilterArray(colors)
    }
  },
  mutations: {
    // 添加商品列表
    setProductList (state, data) {
      state.productList = data
    },
    // 添加到购物车
    addCart (state, id) {
      // 先判断购物车是否已有，如果有，数量+1
      const isAdded = state.cartList.find(item => item.id === id)
      if (isAdded) {
        isAdded.count ++
      } else {
        state.cartList.push({
          id: id,
          count: 1
        })
      }
    },
    // 修改商品数量
    editCartCount (state, payload) {
      const product = state.cartList.find(item => item.id === payload.id)
      product.count += payload.count
    },
    // 删除商品
    deleteCart (state, id) {
      const index = state.cartList.findIndex(item => item.id === id)
      state.cartList.splice(index, 1)
    },
    // 清空购物车
    emptyCart (state) {
      state.cartList = []
    }
  },
  actions: {
    // 请求商品列表
    getProductList (context) {
      // 真实环境通过 ajax 获取，这里用异步模拟
      setTimeout(() => {
        context.commit('setProductList', product_data)
      }, 500)
    },
    // 购买
    buy (context) {
      // 真实环境应通过 ajax 提交购买请求后再清空购物列表
      return new Promise(resolve=> {
        setTimeout(() => {
          context.commit('emptyCart')
          resolve()
        }, 500)
      })
    },
    login() {
      let params = {
        'username': this.loginForm.username,
        'password': this.loginForm.password
      }
      this.$store.dispatch('Login', params)
        .then(() => {this.$router.push({ path: '/' })
        })
        .catch((error) => {
          console.log(error.response); 
        })
    },
    logOut () {
      this.$store.dispatch('LogOut').then(() => {
      //跳转到登录页面  
      this.$router.push('/login');
      })
    }
  }
})

export default store
