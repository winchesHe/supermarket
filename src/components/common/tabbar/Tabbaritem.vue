<template>
  <div class="tab-bar-item" @click="change">
    <div v-if="!isActive"><slot name="icon"></slot></div>
    <div v-else><slot name="icon_active"></slot></div>
    <div :class="{active:isColor}"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name:"Tabbaritem",
  props:{
    link:{
      type:String,
      required:true
    }
  },
  computed:{
    isColor(){
      return this.$route.path.indexOf(this.link) !== -1 
    },
    isActive(){
      return this.$route.path.indexOf(this.link) !== -1
    }
  },
  data(){
    return {
      // isActive:true,
      // path:"/profile"
    }
  },
  methods:{
    change(){
      // 解决重复点击报错问题
      if(this.$route.path !== this.link){this.$router.replace(this.link)}
    },
  }
}
</script>

<style>

.tab-bar-item{
  flex: 1;
  height: 49px;
  background-color: #f6f6f6;
  text-align: center;
}
.tab-bar-item img{
    width: 25px;
    height: 25px;
    margin-top: 5px;
    vertical-align: middle;
}
.active{
  color: red;
}
</style>