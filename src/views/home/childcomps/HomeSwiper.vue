<template>
  <swiper>
      <swiperItem v-for="item in banners">
          <a href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiperItem>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from '@/components/common/swiper/index'

export default {
  name:"HomeSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>

</style>