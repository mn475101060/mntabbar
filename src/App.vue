<template>
  <div id="app">
      <!-- <router-link to="/home">主页</router-link>
      <router-link to="/category">分类</router-link>
      <router-link to="/cart">购物车</router-link>
      <router-link to="/profile">个人</router-link>
       <router-view></router-view> --> 
      <router-view></router-view>
      <TabBar>        
       
        <TabBarItem path = "/home" activeColor='blue'>
          <img slot = 'item-icon' src="./assets/img/tabbar/Tab bar_首页.png" alt="">
          <img slot = 'item-icon-active' src="./assets/img/tabbar/Tab bar_首页_active.png" alt="">
          <div slot="item-text">首页</div>
        </TabBarItem>         
        <TabBarItem path = "/category">
          <img slot = 'item-icon' src="./assets/img/tabbar/Tab bar-分类.png" alt="">
          <img slot = 'item-icon-active' src="./assets/img/tabbar/Tab bar-分类_active.png" alt="">
          <div slot="item-text">分类</div>
        </TabBarItem>
        <TabBarItem path = "/cart">
          <img slot = 'item-icon' src="./assets/img/tabbar/Tab bar-购物车.png" alt="">
          <img slot = 'item-icon-active' src="./assets/img/tabbar/Tab bar-购物车_active.png" alt="">
          <div slot="item-text">购物车</div>
        </TabBarItem>
        <TabBarItem path = "/profile">
          <img slot = 'item-icon' src="./assets/img/tabbar/Tab bar Me.png" alt="">
          <img slot = 'item-icon-active' src="./assets/img/tabbar/Tab bar Me_active.png" alt="">
          <div slot="item-text">my</div>
        </TabBarItem>      
      </TabBar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem'
export default {
  name: 'App',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  @import './assets/css/base.css';
  
  
  
</style>
