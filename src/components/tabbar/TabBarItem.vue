<template>
  <div class="tab-bar-item" @click="onClick" >
      <div v-if="isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script> 
export default {
  data(){
    return{
      
    }
  },
   props:{
    path:String,
    activeColor:{
      type:String,
      default:"red"
    }
  },
  methods:{
    onClick(){
      this.$router.replace(this.path)
      console.log(this.$route.path)
      console.log(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) == -1
    },
    activeStyle(){
      return !this.isActive ? {color:this.activeColor} :{}
    }
  }
 

}
</script>

<style>
    .tab-bar-item{
    flex:1;
    text-align: center;
    height: 49px;
    font-size: 10px;
    margin-top: 3px;
  }
  .tab-bar-item img{
    height: 24px;
    vertical-align:middle;
  }
  
</style>