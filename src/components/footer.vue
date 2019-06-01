<template>
    <footer id="footer">
        <div class="wrap">
            <div class="left">
                <p>新浪微博：@爱芬环保  官方邮箱：467182634@qq.com 电话：000-00000000  12345678</p>

                <p>地址：上海静安区爱芬环保科技咨询服务中心  浙公网安备 33010602009975号</p>
            </div>
            <div class="right"></div>
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
    }
    .wrap{
        max-width: 1280px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding: 0 100px;
        
    }
    .left{
        text-align: left;
        color: #ffffff;

    }
    .left p:first-of-type{
        margin-top: 40px;
    }
</style>


