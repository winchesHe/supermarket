<template>
  <div class="goods" @click="showDeatil">
    <img v-lazy="showImg" alt="">
    <div class="goods-info">
      <p>{{item.title}}</p>
      <span class="price">{{item.price}}</span>
      <span class="collect">{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"GoodListItem",
  props:{
    item:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    showDeatil(){
      // console.log("ss");
      this.$router.push('/detail'+ this.item.iid )
    }
  },
  computed:{
    showImg(){
      return this.item.image || this.item.show.img
    }
  }
}
</script>

<style>
.goods {
    padding-bottom: 40px;
    position: relative;
    width:48%;
    /* 这是防止主页背景透明 */
    background-color: #fff;
  }
  .goods img {
    width: 100%;
    border-radius: 5%;
  }

  .goods-info {
    font-size: 14px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~@/assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>