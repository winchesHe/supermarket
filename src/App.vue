<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>   
    </keep-alive>
    <maintabbar/>
  </div>
</template>

<script>
import maintabbar from '@/components/content/maintabbar/MainTabbar.vue'
export default {
  name:"App",
  components:{
    maintabbar
  }
}
</script>

<style>
 @import '~@/assets/css/base.css';
</style>
