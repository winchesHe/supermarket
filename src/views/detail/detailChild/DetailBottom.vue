<template>
  <div class="Detail-Bottom">
    <div class="bottom-left">
      <ul class="bottom-left-item">
        <i></i>
        <li>客服</li>
      </ul>
      <ul class="bottom-center-item">
        <i></i>
        <li>店铺</li>
      </ul>
      <ul class="bottom-right-item">
        <i></i>
        <li>收藏</li>
      </ul>

      <div class="bottom-right">
        <div class="bottom-shop" @click="addcart">
          <span>加入购物车</span>
        </div>
        <div class="bottom-buy">
          <span>购买</span>
        </div>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name:"DetailBottom",
  methods: {
    addcart(){
      this.$emit("addcart")
    }
  },
}
</script>

<style scoped>
li{
  list-style: none;
}
.Detail-Bottom{
  width: 100%;
  height: 49px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  z-index: 100;
  width: 100%;
}
.bottom-left{
  display: flex;
  text-align: center;
}
.bottom-left ul,.bottom-right{
  flex: auto;
}
.bottom-left ul{
  width: 180px;
}
.bottom-right{
  width: 190px;
  flex-shrink: 0;
  line-height: 49px;
}
.bottom-left-item i{
  background-image: url('~@/assets/img/detail/detail_bottom.png');
  display: block;
  width: 30px;
  height: 30px;
  background-size: 30px;
  background-position-y: -72px;
  margin-left: 15px;
}
.bottom-center-item i{
background-image: url('~@/assets/img/detail/detail_bottom.png');
  display: block;
  width: 30px;
  height: 30px;
  background-size: 30px;
  background-position-y: -135px;
  margin-left: 15px;
}
.bottom-right-item i{
  background-image: url('~@/assets/img/detail/detail_bottom.png');
  display: block;
  width: 30px;
  height: 30px;
  background-size: 30px;
  background-position-y: -0px;
  margin-left: 15px;
}
.bottom-shop{
  position: absolute;
  background-color: rgb(255, 233, 25);
  color: rgb(88, 95, 20);
  width: 95px
}
.bottom-buy{
  position: absolute;
  width: 95px;
  right: 0;
  color: #fff;
  background-color: rgb(255, 103, 155);
}
</style>