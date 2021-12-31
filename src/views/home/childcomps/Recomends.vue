<template>
  <div class="recomends">
      <div class="recomends-item" v-for="item in recomends">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
      </div>
  </div>
</template>

<script>
export default {
  name:"Recomends",
  props:{
    recomends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .recomends{
    display: flex;
    padding: 10px 0 20px ;
    border-bottom: 8px solid #eeecec;
  }
  .recomends-item{
    flex: 1;
    text-align: center;
  }
  .recomends-item img{
    width: 80px;
    height: 80px;
    margin-bottom: 4px;
  }
</style>