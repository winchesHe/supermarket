<template>
  <div class="check-btn " :class="{showBtn:check}">
    <img src="~@/assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name:"CheckBtn",
  props:{
    check:{
      type:Boolean,
      default:true
    }
  }
}
</script>

<style scoped>
  .check-btn{
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  margin: 0 5px 0;
  /* background-color: rgb(255, 105, 0);
  border-radius: 50%; */
  }
 .check-btn img{
  width: 30px;
  height: 30px;
  border: 2px solid #aaa;
  border-radius: 50%;
 }
 .showBtn{
  background-color: rgb(255, 105, 0);
  border-radius: 50%;
 }
</style>