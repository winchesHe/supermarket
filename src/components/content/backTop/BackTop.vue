<template>
  <div class="back-top" @click="BackClick">
    <img src="@/assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
  import { BackTop } from '@/components/common/scroll/Scroll'


export default {
  name: "BackTop",
  created() {
    this.$nextTick(()=>{
      // 到一定距离展示和关闭返回按钮
      // ShowBack()
      // Scroll()
    })
  },
  mounted(){
    
  },
  methods: {
    BackClick() {
      // 页面返回到主页
      BackTop()
    },
  }
}

function ShowBack(){
        window.onscroll = function (){
          
        }
    }
</script>

<style>
.back-top {
  position: fixed;
  bottom: 49px;
  right: 5px;
  /* z-index: 100; */
}
.back-top img {
  width: 50px;
}
</style>