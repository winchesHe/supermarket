<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" class="tab-control-item" @click="itemClick(index)">
      <span :class="{active:currentIndex === index}">{{item}}</span>      
    </div>
  </div>
</template>

<script>
export default {
  name:"TabControl",
  props:{
    title:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
    }
  }
}
</script>

<style>
  .tab-control{
    position: sticky;
    top: 44px;
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #fff;
    z-index:9 ;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item span{
    padding: 5px;
  }
  .active{
    color: var(--color-high-text);
    border-bottom: 4px solid var(--color-tint);
  }
</style>