<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detail-goods-info">
    <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img @load="goodsload"
      v-for="(item, index) in detailInfo.detailImage[0].list" 
      :src="item" alt="">
    </div>
  </div>
</template>

<script>

	export default {
		name: "DetailGoodsInfo",
    props: {
      detailInfo: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      // 这样图片加载完只会发送一次
      goodsload(){
        if(++this.goli == this.goliLength){
        this.$emit("goodsload")
        }
      }
    },
    data(){
      return {
        goli:0,
        goliLength:0
      }
    },
    watch:{
      detailInfo(){
        this.goliLength = this.detailInfo.detailImage[0].list.length
      }
    }
	}
</script>

<style scoped>
  .detail-goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-desc {
    padding: 0 15px;
  }

  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .info-desc .start {
    float: left;
  }

  .info-desc .end {
    float: right;
  }

  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .info-desc .end::after {
    right: 0;
  }

  .info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }

  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }

  .info-list img {
    width: 100%;
  }
  
</style>
