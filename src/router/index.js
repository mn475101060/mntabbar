import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('../views/home/home')
const cateGory = () => import('../views/category/category')
const proFile = () => import('../views/profile/profile')
const cart = () => import('../views/cart/cart') 
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/category',
      component:cateGory
    },
    {
      path:'/profile',
      component:proFile
    },
    {
      path:'/cart',
      component:cart
    }
  ]
})
