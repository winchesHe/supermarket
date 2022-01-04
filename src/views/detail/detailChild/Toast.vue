<template>
  <div class="Toast">
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  name:"Toast",
  props:{
    message:{
      type:String,
      default:""
    }
  }
}
</script>

<style scoped>
  .Toast{
    position: fixed;
    left: 50%;
    top: 50%;
    width: 200px;
    height: 60px;
    background-color: rgba(0, 0, 0, .6);
    transform: translate(-50%, -50%);
    z-index: 999;
    color: #fff;
    border-radius: 10%;
    text-align: center;
    line-height: 60px;
  }

</style>