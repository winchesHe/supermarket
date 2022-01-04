<template>
  <div class="Cart-List">
    <cart-list-item v-for="(item,index) in goods" :product="item" :key="index"></cart-list-item>
  </div>
</template>

<script>
import CartListItem from './CartListItem.vue'

export default {
  name:"CartList",
  computed:{
    goods(){
      return this.$store.state.cartList
    }
  },
  components:{
    CartListItem
  }
}
</script>

<style>

</style>