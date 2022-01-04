<template>
  <div class="cart-nav">
    <div class="cart-nav-left">
      <check-btn :check="isCheck" @click.native="allCheck"></check-btn>
      <span>全选</span>
    </div>
    <div class="cart-nav-center">
      <span>合计：￥{{totalPrice}}</span>
    </div>
    <div class="cart-nav-right">去计算({{counter}})</div>
  </div>
</template>

<script>
import CheckBtn from '@/components/content/checkBtn/CheckBtn'
export default {
  name:"CartNav",
  components:{
    CheckBtn
  },
  computed:{
    totalPrice(){
      return this.$store.state.cartList.filter(item=>{return item.check}).reduce((pre,now)=>{return pre+now.newPrice * now.count},0)
    },
    counter(){
      return this.$store.state.cartList.filter(item=>{return item.check}).reduce((pre,now)=>{return pre+now.count},0)
    },
    isCheck(){
     //(this.$store.state.cartList.filter(item=>{return item.check == false}).length) == 0
    if(this.$store.state.cartList == 0 ) return false
    return   !this.$store.state.cartList.find(item => !item.check)
    }
  },
  methods:{
    allCheck(){
      if(this.isCheck){//全选状态
        this.$store.state.cartList.forEach(item=>item.check = false)
      }else{  //全不选状态
        this.$store.state.cartList.forEach(item=>item.check = true)
      }
    }
  }
}
</script>

<style scoped>
  .cart-nav{
    color: #aaa;
    position: fixed;
    bottom: 49px;
    height: 40px;
    line-height: 40px;
    background-color: rgb(237, 237, 237);
    width: 100%;
    display: flex;
  }
  .cart-nav-left{
    display: flex;
    align-items: center;
    width: 80px;
  }
  .cart-nav-center{
    flex: 1;
    text-align: center;
  }
  .cart-nav-right{
    width: 100px;
    color: #fff;
    text-align: center;
    background-color: rgb(255, 105, 0);
  }
</style>