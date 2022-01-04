<template>
  <div class="prifile">
    <nav-bar class="profile-nav"><div slot="center">小何商城</div></nav-bar>
    <profile-user></profile-user>
    <profilemess></profilemess>
    <profile-data></profile-data>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"
import ProfileUser from './profileChild/ProfileUser.vue'
import Profilemess from './profileChild/Profilemess.vue'
import ProfileData from './profileChild/ProfileData.vue'


export default {
  
  name:"Profile",
  components:{
    NavBar,
    ProfileUser,
    Profilemess,
    ProfileData,
    ProfileData
  },
  // data(){
  //   return {
  //     message:[
  //       {img:"./profileChild/img/svg1.png",mess:"我的信息"},
  //       {img:"./profileChild/img/svg2.png",mess:"积分商城"},
  //       {img:"./profileChild/img/svg3.png",mess:"会员卡"}
  //       ]
  //   }
  // },
  created() {
  },
}
</script>

<style scoped>
.profile-nav{
  background-color: var(--color-tint);
  color: #fff;
  font-size: 18px;
  font-weight:600;
}
</style>