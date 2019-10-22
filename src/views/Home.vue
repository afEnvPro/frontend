<template>
    <div id="home">
        <!-- banner部分 -->
        <div>
            <div class="layui-carousel" id="banner">
                <div carousel-item>
                    <div>
                        <img src="../assets/res/static/img/banner1.jpg">
                        <div class="panel">
                            <p class="title">文字文字</p>
                            <p>文字文字文字</p>
                        </div>
                    </div>
                    <div>
                        <img src="../assets/res/static/img/banner2.jpg">
                        <div class="panel">
                            <p class="title">文字文字</p>
                            <p>文字文字文字</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- main部分 -->
        <div class="main-product">
            <div class="layui-container" style="overflow:hidden;">
                <div class="layui-col-sm4"></div>
                <div class="layui-col-sm6">
                </div>
            </div>
            <div class="layui-container">
                <p class="title"><span>爱芬环保</span>致力于推动城市垃圾分类进程</p>
                <div class="layui-row layui-col-space25">
                    <div class="layui-col-sm6 layui-col-md3">
                        <div class="content">
                            <img src="../assets/res/static/img/af.png" style="width: 68%; height: auto;">
                        </div>
                    </div>
                    <div class="layui-col-sm6 layui-col-md3 ">
                        <div class="content">
                            <div><img src="../assets/res/static/img/Big_icon2.png"></div>
                            <div>
                                <p class="label">爱芬环保扎根社区8年</p>
                            </div>
                            <a href="javascript:;">查看详情 ></a>
                        </div>
                    </div>
                    <div class="layui-col-sm6 layui-col-md3 ">
                        <div class="content">
                            <div><img src="../assets/res/static/img/Big_icon3.png"></div>
                            <div>
                                <p class="label">累积推动309个社区</p>
                            </div>
                            <a href="javascript:;">查看详情 ></a>
                        </div>
                    </div>
                    <div class="layui-col-sm6 layui-col-md3 ">
                        <div class="content">
                            <div><img src="../assets/res/static/img/Big_icon4.png"></div>
                            <div>
                                <p class="label">覆盖超过18万户居民</p>
                            </div>
                            <a href="javascript:;">查看详情 ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-service">
            <div class="layui-container">
                <p class="title">爱芬实践成果总结<span>三期十步法</span></p>
                <div class="layui-row layui-col-space25 layui-col-space80">
                    <div class="layui-col-sm6">
                        <div class="content">
                            <div class="content-left"><img src="../assets/res/static/img/home_img1.jpg"></div>
                            <div class="content-right">
                                <p class="label">爱芬模式三期十步法介绍</p>
                                <span></span>
                                <p>爱芬环保的“三期十步法”，详细列明了从零开始社区垃圾分类的步骤，以及每一步需要做的工作，方便我们提前去思考可能遇到的困难，以及应对的解决办法。</p>
                            </div>
                        </div>
                    </div>
                    <div class="layui-col-sm6">
                        <div class="content">
                            <div class="content-left"><img src="../assets/res/static/img/home_img2.jpg"></div>
                            <div class="content-right">
                                <p class="label">三期十步法实施</p>
                                <span></span>
                                <p>“三期十步法”是指导入期（社区调研、工作小组、宣传动员、硬件调整、人员培训、绿色账户）、执行期（正式启动、值班督促、社区激励）、维持期（总结评估、制度建设）。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="service-more"><a href="">查看更多</a></div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'home',
        components: {
            HelloWorld
        }
    }
</script>
