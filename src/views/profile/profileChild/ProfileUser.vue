<template>
  <div class="profile-user">
    <img class="user-img" src="./img/user.png" alt="">
    <ul class="profile-center">
      <li>登录/注册</li>
      <li><img src="./img/phone.png" alt=""><span>暂无绑定手机号</span></li>
    </ul>
    <div class="arrow-right profile-right"></div>
  </div>
</template>

<script>
export default {
  name:'ProfileUser'
}
</script>

<style scoped>
li{
  list-style: none;
}
.profile-user{
  height: 80px;
  width: 100%;
  background-color: var(--color-tint);
  margin-top: -1px;
  display: flex;
  color: #fff;
}
.user-img{
  margin-top: -10px;
  margin-right: 5px;
}
.profile-center{
  align-items: center;
  margin-top: 12px;
}
.profile-right{
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  position: absolute;
  width: 15px;
  height: 15px;
  right: 15px;
  top: 70px;
}
</style>