<template>
  <div class="cate-title">
    <title-item v-for="(item,index) in TitleList" :key="index" :item="item"></title-item>
  </div>
</template>

<script>
import TitleItem from './TitleItem.vue'
export default {
  name:"CateTitle",
  components:{
    TitleItem
  },
  props:{
    TitleList:Array
  }
}
</script>

<style scoped>

</style>