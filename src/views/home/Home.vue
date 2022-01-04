<template>
  <div id="home">
    <navbar class="home-nav"><div slot="center">购物街</div></navbar>
    <back-top></back-top>
    <homeSwiper :banners="banners"></homeSwiper>
    <recomends :recomends="recommends"></recomends>
    <feature-view />
    <tab-control @itemClick="showGoods" :title="['流行', '新款', '精选']" />
    <good-list :goodlist="goods[currentType].list"></good-list>
    <div id="tall"></div>
  </div>
</template>

<script>
import homeSwiper from "./childcomps/HomeSwiper.vue";
import Recomends from "./childcomps/Recomends.vue";
import FeatureView from "./childcomps/FeatureView.vue";

import navbar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabcontrol/TabControl";
import GoodList from "@/components/content/goodlist/GoodList";
import BackTop from "@/components/content/backTop/BackTop";

import { EventBus } from '@/common/eventBus'

import { getHomeMultidata, getHomeGoods } from "@/network/home";

export default {
  name: "Home",
  components: {
    navbar,
    homeSwiper,
    Recomends,
    FeatureView,
    TabControl,
    GoodList,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      currentY:0
    };
  },
  created() {
    // 1.请求轮播图数据
    this.getHomeMultidata();
    // 2.请求商品展示信息
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    this.Scroll();
    
  },
  // 通过页面活跃与不活跃实现保存当前网页位置
  activated() {
    // console.log("创建");
    // console.log(this.currentY);
    document.documentElement.scrollTop = this.currentY
    // this.currentY = 0
  },
  deactivated() {
    // console.log(this.currentY);
  },
  methods: {
    // 事件监听相关
    showGoods(index) {
      switch (index) {
        case 0: {
          this.currentType = "pop";
          break;
        }
        case 1: {
          this.currentType = "new";
          break;
        }
        case 2: {
          this.currentType = "sell";
          break;
        }
      }
    },
    Scroll() {
      // 原生鼠标监听事件
      let that = this
      // 保存离开时的位置
      const aaa = this.throttle(function(){that.currentY=document.documentElement.scrollTop},800)
      window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop;
        var scrollHeight = document.documentElement.scrollHeight;
        var clientHeight = document.documentElement.clientHeight;
        // console.log(parseInt(scrollTop));
        // console.log(that.goods);
        // console.log(scrollHeight);
        // console.log(clientHeight);

        let BT = document.querySelector(".back-top");
        // let scrollTop =  document.documentElement.scrollTop
        // console.log(scrollTop);
        if(BT)  if (parseInt(scrollTop) >= 1000) {
          BT.style.zIndex = 100;
        } else {
           BT.style.zIndex = 0;
        }
        // 判断是否到底并发送请求
        const refresh = that.debounce(that.getHomeGoods,1250)
        // setTimeout(()=>{
          if (
            parseInt(scrollHeight) - parseInt(scrollTop) ==
            parseInt(clientHeight) || parseInt(scrollHeight) - parseInt(scrollTop) ==
            parseInt(clientHeight) + 1
          ) {
            // console.log(parseInt(scrollHeight));
            // console.log(parseInt(scrollTop));
            // console.log(parseInt(clientHeight));
            // 网络请求相关
              // scrollTop -= 10
              // 防抖动函数解决频繁发送请求问题
              // console.log("请求发送成功");
              refresh((that.currentType))
          }
        // },1500)    
          //  事件巴士
          // console.log(that);
      aaa()
      }; 
    },
    // 网络请求相关
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      // 防抖动测试
      // console.log("请求发送成功");
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
    // 防抖动函数
    debounce(func,delay){
      let timer = null
      return function (...args){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
          func.apply(this,args)
        },delay)
      }
    },
    // 节流函数
    throttle(func,delay){
      let timer
      return function(...args){
        if(!timer) {
        timer = setTimeout(()=>{
          timer = null
          func.call(this,args)
        },delay)}
      }
    }
  },
};
</script>

<style>
.home-nav {
  /* background-color: var(--color-tint); */
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
#tall {
  height: 100px;
}
</style>