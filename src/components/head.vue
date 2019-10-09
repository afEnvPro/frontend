<template>
  <div id="head">
    <header id="header"></header>
    <div id="menu">
      <div id="logo">
        <img src="../assets/images/logo.jpg" alt="">
      </div>
      <div id="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于我们</router-link>
        <router-link to="/service">我们的服务</router-link>
        <router-link to="/activity">活动</router-link>
        <router-link to="/media">媒体报道</router-link>
        <router-link to="/joinUs">加入我们</router-link>
      </div>
    </div>
    <swiper class="banner"></swiper>
  </div>
</template>
<script>
import swiper from '@/components/swiper.vue'
export default {
  components: {
    swiper
  }
}
</script>
<style scoped>
    #header {
    height: 45px;
    background: #8dc21f;
    min-width: 1200px;
  }

  #menu {
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    /* max-width:1280px; */
    margin: 0 auto;
  }
  #logo{
    /* padding: 30px 0; */
    padding-left: 80px;
  }
  #nav {
    line-height: 112px;
    padding-right: 80px;
    font-size: 16px;
    min-width: 554px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
    margin-right: 30px;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
  .banner{
    min-width: 1200px;
  }
</style>

