<template>
  <div class="profile-data">
    <div>
    <img src="./img/svg1.png" alt=""><span>我的信息</span>
    </div>
    <div >
    <img src="./img/svg2.png" alt=""><span>积分商城</span>
    </div>
    <div class="profile-bottom">
    <img src="./img/svg3.png" alt=""><span>会员卡</span>
    </div>
    <div>
    <img class="my-cart" src="./img/svg4.png" alt=""><span>我的购物车</span>
    </div>
    <div >
    <img src="./img/svg5.png" alt=""><span>下载购物APP</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"ProfileData",
  props:{
    data:{
      type:Array
    }
  },
  data(){
    return {
      message:[
         {img:"./img/svg1.png",mess:"我的信息"},
         {img:"./img/svg2.png",mess:"积分商城"},
         {img:"./img/svg3.png",mess:"会员卡"}
         ]
    }
  }
}
</script>

<style scoped>
.profile-data{
  height: 100px;
  line-height: 50px;
}
.profile-data img{
  padding: 0 10px;
  vertical-align:middle;
}
.profile-data span{
  display: inline-block;
  vertical-align: middle;
}
.profile-bottom{
   border-bottom: 15px solid rgba(242, 242, 242,.7);
}
.my-cart{
  margin-left: -2px;
}
</style>