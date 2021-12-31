<template>
  <div class="goods-list">
    <good-list-item v-for="(item,index) in goodlist" :key="index"  :item="item"/>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem'
export default {
  name:"GoodList",
  components:{
    GoodListItem,
  },
  props:{
    goodlist:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>