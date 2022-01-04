<template>
  <div >
    <nav-bar class="detail-bar">
      <div slot="left" class="titelImg" @click="backClick">
        <img src="@/assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div  v-for="(item, index) in title" class="title-item"
              :class="{detaiActive:currentIndex == index}"
              @click="titleClick(index)"
        >
          {{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "DetailBar",
  components: {
    NavBar,
  },
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex:0
    };
  },
  methods: {
    titleClick(index){
      this.currentIndex = index
      this.$emit("titleClick",index)      
    },
    backClick(){
      this.$router.back()
    }
  },
};
</script>

<style scoped>
  .detail-bar{
    background-color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .title{
    display: flex;
  }
  .title-item{
    flex: 1;
  }
  .detaiActive{
    color: var(--color-high-text);
  }
  .titelImg img{
    margin-top: 12px;
  }
</style>