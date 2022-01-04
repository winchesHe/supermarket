<template>
  <div class="title-item">
    <span>{{item.title}}</span>
  </div>
</template>

<script>
export default {
  name:"TitleItem",
  props:{
    item:Object
  }
}
</script>

<style scoped>
  .title-item{
    width: 30%;
    height: 50px;
    background-color: #fff;
    border: 1px solid #aaa;
    /* color: #fff; */
    font-size: 18px;
    text-align: center;
    line-height: 50px;
  }

</style>