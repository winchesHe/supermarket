<template>
  <div id=tab-bar>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"Tabbar",
  components:{
  }
}
</script>

<style>
#tab-bar{
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #eee;
  box-shadow: 0px -1px 1px rgba(150,150,150,.08);
  background-color: #eee;
}
</style>