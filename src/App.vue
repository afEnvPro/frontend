<template>
    <div id="app">
        <!--    移动端    -->
        <div id="app-mobile" class="d-block d-sm-none">
            <header id="header-mobile">
                <i class="iconfont icon-menu-fill" @click="sliderShow =   !sliderShow"></i>
                <span>爱芬环保</span>
            </header>
            <div id="menu-mobile">
                <div id="logo-mobile">
                    <img src="./assets/images/logo.jpg" alt="">
                </div>
                <div id="nav-mobile">
                    <el-drawer
                            :modal-append-to-body="false"
                            class="nav-slider"
                            :modal="false"
                            :visible.sync="sliderShow"
                            :show-close="false"
                            size="80%"
                            direction="ltr">
                        <ul>
                            <router-link tag="li" to="/" exact>首页</router-link>
                            <router-link tag="li" to="/about">关于我们</router-link>
                            <router-link tag="li" to="/service">我们的服务</router-link>
                            <router-link tag="li" to="/activity">活动</router-link>
                            <router-link tag="li" to="/media">媒体报道</router-link>
                            <router-link tag="li" to="/joinUs">加入我们</router-link>
                        </ul>
                    </el-drawer>
                </div>
            </div>
            <swiper class="banner"></swiper>
            <router-view/>
            <footer-vue></footer-vue>
        </div>
        <!--    PC端    -->
        <div id="app-pc" class="d-none d-sm-block">
            <header id="header">
            </header>
            <div id="menu">
                <div id="logo">
                    <img src="./assets/images/logo.jpg" alt="">
                </div>
                <div id="nav">
                    <router-link to="/" exact>首页</router-link>
                    <router-link to="/about">关于我们</router-link>
                    <router-link to="/service">我们的服务</router-link>
                    <router-link to="/activity">活动</router-link>
                    <router-link to="/media">媒体报道</router-link>
                    <router-link to="/joinUs">加入我们</router-link>
                </div>
            </div>
            <swiper class="banner"></swiper>
            <router-view/>
            <footer-vue></footer-vue>
        </div>
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
        },
        data() {
            return {
                // 移动端侧边栏
                sliderShow: false
            }
        }
    }
</script>

<style lang="less">
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
        font-family: "”Microsoft YaHei";
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
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

        // 移动端
        #app-mobile {
            #header-mobile {
                width: 100%;
                height: 40px;
                line-height: 40px;
                text-align: center;

                i.icon-menu-fill {
                    position: absolute;
                    left: 12px;
                    font-size: 30px;
                    float: left;
                    cursor: pointer;
                }

                span {
                    color: #8dc21f;
                }
            }
        }

        // PC端
        #app-pc {
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

            #logo {
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

            #nav a.router-link-active {
                color: #42b983;
            }

            .banner {
                min-width: 1200px;
            }
        }
    }

    // element-ui相关样式
    .nav-slider.el-dialog__wrapper {
        top: 40px;

        ul {
            display: flex;
            flex-direction: column;

            li {
                line-height: 40px;
                margin: 0 auto;
                text-align: center;
                height: 40px;
                width: 60%;
                border-bottom: 1px solid rgba(0, 0, 0, .4);
            }
        }

    }


</style>