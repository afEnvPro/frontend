<template>
    <footer id="footer">
        <div class="wrap">
            <div class="left">
                <p>新浪微博：@爱芬环保  官方邮箱：467182634@qq.com 电话：000-00000000  12345678</p>

                <p>地址：上海静安区爱芬环保科技咨询服务中心  浙公网安备 33010602009975号</p>
            </div>
            <div class="right">
                <div class="wrap">
                    <div class="imgbox">
                         <img src="../assets/images/sina.png" alt="新浪微博">
                    </div>
                   
                    <div class="text">
                        <p>新浪微博</p>
                        <p>@爱芬环保</p>
                    </div>
                </div>
                <div class="wrap">
                    <div class="imgbox">
                        <img src="../assets/images/wx.png" alt="微信二维码">
                    </div>
                    <div class="text">
                        <p>扫一扫关注</p>
                        <p>爱芬环保</p>
                        <p>官方微信账号</p>
                    </div>
                </div>
            </div>
        </div>
        
    </footer>
</template>
<script>
export default {
    name: 'footerVue',
}
</script>
<style scoped>
    #footer{
        height: 115px;
        background: #8dc21f;
        min-width: 1200px;
    }
    #footer>.wrap{
        /* max-width: 1280px; */
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding: 0 50px;
        height: 100%;
        
    }
    .left{
        text-align: left;
        color: #ffffff;

    }
    .left p:first-of-type{
        margin-top: 40px;
    }
    .right{
        width: 450px;
        display: flex;
        justify-content: space-between;
        height: 100%;
        background: #ffffff;
        padding: 10px 20px;
        box-sizing: border-box;
    }
    .right img{
        height: 100%;
    }
    .right .wrap{
        display: flex;
        justify-content: space-between;
    }
    .right .text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
    }
</style>


