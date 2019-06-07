<template>
  <div id="app">
    <header id="header"></header>
    <div id="menu">
      <div id="logo">
        <img src="./assets/images/logo.jpg" alt="">
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
    <swiper></swiper>

    <router-view />
    <footer-vue></footer-vue>
  </div>
</template>
<script>
// @ is an alias to /src
import swiper from '@/components/swiper.vue'
import footerVue from '@/components/footer.vue'

export default {
  name: 'home',
  components: {
    swiper,
    footerVue
  }
}
</script>

<style>
  body,
  ul,
  ol,
  li,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  form,
  fieldset,
  table,
  td,
  img,
  div {
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    background: #fff;
    color: #333;
    font-size: 12px;
    margin-top: 5px;
    font-family: "SimSun", "宋体", "Arial Narrow";
  }

  ul,
  ol {
    list-style-type: none;
  }

  select,
  input,
  img,
  select {
    vertical-align: middle;
  }

  a {
    text-decoration: none;
  }

  a:link {
    color: #009;
  }

  a:visited {
    color: #800080;
  }

  a:hover,
  a:active,
  a:focus {
    color: #c00;
    text-decoration: underline;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #header {
    height: 45px;
    background: #8dc21f;
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
    font-size: 14px;
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
</style>