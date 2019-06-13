<template>
  <div class="list">
    <el-row :gutter="100">
      <el-col :span="8" v-for="i in count" class="infinite-list-item">
        <news></news>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import news from '@/components/news.vue'
  export default {
    components: {
      news
    },
    data () {
      return {
        count: 9
      }
    }
  }
</script>
<style scoped>
.list{
  padding: 0 200px;
  margin: 100px auto;
  min-width: 800px;
}
</style>
