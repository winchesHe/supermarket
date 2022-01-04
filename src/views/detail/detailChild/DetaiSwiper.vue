<template>
  <swiper id="detail-swiper">
    <swiper-item  v-for="item in DetailList" >
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper,SwiperItem } from "@/components/common/swiper"
export default {
  name:"DetailSwiper",
  components:{
  Swiper,
  SwiperItem
  },
  props:{
    DetailList:{
      type:[],
      default(){
        return []
      }
    }
  }
  
}
</script>

<style scoped>
  #detail-swiper{
    padding-top: 0;
    position: relative;
    overflow: hidden;
    height: 42vh;
  }
</style>>
