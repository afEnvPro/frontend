<template>
    <div class="item" @click="jump(name)">
          <el-image :src="src"></el-image>
          <div class="text">
            <p class="tit">标题标题标题</p>
            <p class="detail">描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
          </div>
        </div>
</template>
<script>
export default {
    data() {
      return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        name: null
      }
    },
    mounted(){
      this.name = this.$route.name
    },
    methods:{
        jump: function(name){
          switch (name) {
            case 'activity-list':
              this.$router.push({ name: 'activity-details', params: { sort: '0',id:'123' }})
              break;
            case 'media-list':
              this.$router.push({ name: 'media-details', params: { sort: '0',id:'123' }})
              break;
          }
            
        }
    }
}
</script>
<style scoped>
.item{
  /* padding: 20px; */
  margin-bottom: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  cursor: pointer;
}
.text{
  padding: 15px;
}
.tit{
  font-size: 18px;
  line-height: 100%;
  margin-bottom: 10px;
}
.detail{
  line-height: 150%;
  text-align: left;
}
</style>


