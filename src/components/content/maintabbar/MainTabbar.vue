<template>
  <!-- <div> -->
    <tabbar>
      <tabbaritem link="/home">
        <img slot="icon" src="@/assets/img/tabbar/home.svg" alt="">
        <img slot="icon_active" src="@/assets/img/tabbar/home_active.svg" alt="">
        <div slot="text">主页</div>
      </tabbaritem>
      <tabbaritem link="/category">
        <img slot="icon" src="@/assets/img/tabbar/category.svg" alt="">
        <img slot="icon_active" src="@/assets/img/tabbar/category_active.svg" alt="">
        <div slot="text">分类</div>
      </tabbaritem>
      <tabbaritem link="/cart">
        <img slot="icon" src="@/assets/img/tabbar/cart.svg" alt="">
        <img slot="icon_active" src="@/assets/img/tabbar/cart_active.svg" alt="">
        <div slot="text">购物车</div>
      </tabbaritem>
      <tabbaritem link="/profile">
        <img slot="icon" src="@/assets/img/tabbar/profile.svg" alt="">
        <img slot="icon_active" src="@/assets/img/tabbar/profile_active.svg" alt="">
        <div slot="text">我的</div>
      </tabbaritem>
    </tabbar>
  <!-- </div> -->
</template>

<script>
import tabbar from '@/components/common/tabbar/Tabbar'
import tabbaritem from '@/components/common/tabbar/Tabbaritem'
export default {
  name:"MainTabbar",
  components:{
    tabbar,
    tabbaritem
  }
}
</script>

<style>

</style>