<template>
  <div class="profile-mess">
    <ul v-for="item in mess">
      <li class="pro-price">{{item.price}}<span>{{item.des}}</span></li>
      <li class="pro-mess">{{item.Info}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"Profilemess",
  data(){
    return {
      mess:[{price:"0.00",Info:"我的余额",des:"元"},{price:"0",Info:"我的优惠",des:"个"},
      {price:"0",Info:"我的积分",des:"分"}
      ]
    }
  }
}
</script>

<style scoped>
.profile-mess{
  width: 100%;
  display: flex;
  padding: 20px;
  border-bottom: 10px solid rgb(242, 242, 242);
}
.profile-mess ul{
  flex: 1;
  text-align: center;
  border-right: 1px solid rgba(66, 66, 66, .4);
}
.pro-price{
  font-size: 24px;
  font-weight: 600;
  color: var(--color-high-text);
}
.pro-price span{
  font-size: 20px;
  color: #666;
  font-weight:normal;
}
</style>