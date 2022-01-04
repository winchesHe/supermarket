<template>
  <div class="detai-home">
    <detail-bar @titleClick="titleClick" ></detail-bar>
    <detail-swiper class="detail-swiper" :DetailList="detailSwiper"></detail-swiper>
    <detail-info :goods="goods"></detail-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info @goodsload="goodsload" :detailInfo="detailInfo" ></detail-goods-info>
    <detail-param-info ref="detailParam" :paramInfo="goodsParam"></detail-param-info>
    <detail-comment-info ref="commentInfo" :commentInfo="commentInfo"></detail-comment-info>
    <good-list :goodlist="RecommendImg" ref="showRecommend"></good-list>
    <detail-bottom @addcart="addcart"></detail-bottom>
    <toast v-show="isShow" :message="thisMess"></toast>
    <div id="tall"></div>
  </div>
</template>

<script>
import detailBar from './detailChild/DetaiBar.vue'
import DetailSwiper from './detailChild/DetaiSwiper.vue'
import DetailInfo from './detailChild/DetaiInfo.vue'
import DetailShopInfo from './detailChild/DetailShopInfo.vue'
import DetailGoodsInfo from './detailChild/DetailGoodsInfo.vue'
import DetailParamInfo from './detailChild/DetailParamInfo.vue'
import DetailCommentInfo from './detailChild/DetailCommentInfo.vue'
import GoodList from '@/components/content/goodlist/GoodList'
import DetailBottom from './detailChild/DetailBottom.vue'

import { EventBus } from '@/common/eventBus'
import Toast from './detailChild/Toast.vue'

import { GetDetail,Goods,Shop,GoodsParam,getRecommend } from '@/network/detail'

export default {
  name:"Detail",
  methods: {
  },
  components:{
    detailBar,
    DetailSwiper,
    DetailInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodList,
    DetailBottom,
    Toast,
  },
  data() {
    return {
      iid:null,
      detailSwiper:[],
      goods:{},
      shop:{},
      detailInfo:{},
      goodsParam:{},
      commentInfo:{},
      showParams:0,
      showCommentInfo:0,
      showRecommend:0,
      RecommendImg:[],
      isShow:false,
      thisMess:""
    }
  },
  created(){
    // 创建时获取商品id
    this.iid = this.$route.params.iid

    // 获取轮播图数据
    GetDetail(this.iid).then((res)=>{
      const data =  res.result
      this.detailSwiper = data.itemInfo.topImages

      // 获取商品数据
    this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      // 获取店铺数据
    this.shop =  new Shop(data.shopInfo)
    // 获取商品详情页
    this.detailInfo = data.detailInfo
    // 获取商品参数
    this.goodsParam = new GoodsParam(data.itemParams.info,data.itemParams.rule)
    // 保存商品评价
    if (data.rate.list) {
      this.commentInfo = data.rate.list[0];
    }
    // 获取推荐信息
    getRecommend().then(res=>{
      // console.log(res);
      this.RecommendImg = res.data.list
    })
    })
    
  },
  mounted() {
  },
  methods:{
    titleClick(index){
    
      // console.log(commentInfo);
      // console.log(params);
      switch(index){
        case 0:
          document.documentElement.scrollTop = 0
          break
        case 1:
           document.documentElement.scrollTop = this.showParams
           break
        case 2:
            document.documentElement.scrollTop = this.showCommentInfo
            break
        default:
            document.documentElement.scrollTop = this.showRecommend
            break
      }
    },
    goodsload(){
      // console.log("sss");
      if(!this.showParams){
      this.showParams = this.$refs.detailParam.$el.getBoundingClientRect().top
      this.showCommentInfo = this.$refs.commentInfo.$el.getBoundingClientRect().top
      this.showRecommend = this.$refs.showRecommend.$el.getBoundingClientRect().top
      }
    },
    // 获取购物车信息
    addcart(){
      // console.log(this.goods);
      const obj = {}
      obj.iid = this.iid
      obj.imgURL = this.detailSwiper[0]
      obj.title = this.goods.title
      obj.desc = this.goods.desc
      obj.newPrice = this.goods.nowPrice
      // this.$store.commit("addCart",obj)
      this.$store.dispatch("addCart",obj).then(res=>{
        // console.log(res);
        this.isShow =true
        this.thisMess = res
        setTimeout(()=>{
          this.isShow = false
        },1500)
      })
    }
  }
}
</script>

<style scoped>
.detai-home{
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.detail-swiper{
  position: relative;
}
 #tall{
   height: 200px;
 }
</style>