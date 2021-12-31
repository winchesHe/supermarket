<template>
  <div id="home">
    <navbar class="home-nav"><div slot="center">购物街</div></navbar>
    <homeSwiper :banners="banners"></homeSwiper>
    <recomends :recomends="recommends"></recomends>
    <feature-view/>
    <tab-control :title="['流行','新款','精选']"/>
    <good-list :goodlist="goods['pop'].list"></good-list>
    <div id="tall"></div>
  </div>
</template>

<script>
import homeSwiper from './childcomps/HomeSwiper.vue'
import Recomends from './childcomps/Recomends.vue'
import FeatureView from './childcomps/FeatureView.vue'

import navbar from '@/components/common/navbar/NavBar'
import TabControl from '@/components/content/tabcontrol/TabControl'
import GoodList from '@/components/content/goodlist/GoodList'

import { getHomeMultidata,getHomeGoods} from '@/network/home'

export default {
    name:"Home",
    components:{
      navbar,
      homeSwiper,
      Recomends,
      FeatureView,
      TabControl,
      GoodList
    },
    data(){
      return {
        banners:[],
        recommends:[],
        goods:{
          "pop":{ page:0,list:[] },
          "new":{ page:0,list:[] },
          "sell":{ page:0,list:[] }
        }
      }
    },
    created(){
      // 1.请求轮播图数据
      this.getHomeMultidata()
      // 2.请求商品展示信息
      this.getHomeGoods("pop")
      this.getHomeGoods("new")
      this.getHomeGoods("sell")
    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
      }
    }
  }  
</script>

<style>
.home-nav{
  /* background-color: var(--color-tint); */
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
#tall{
  height: 1000px;
}
</style>