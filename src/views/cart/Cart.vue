<template>
  <div class="Cart">
    <nav-bar class="cart-nav"><div slot="center">购物车({{$store.getters.cartLength}})</div></nav-bar>
    <cart-list ></cart-list>
    <cart-nav></cart-nav>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

import CartList from "./CartChild/CartList.vue"
import CartNav from './CartChild/CartNav.vue'

export default {
  name:"Cart",
  components:{
    NavBar,
    CartList,
    CartNav
  },
  comupted:{
    
  }
}
</script>

<style scoped>
.cart-nav{
  background-color: var(--color-tint);
  color: #fff;
}

</style>