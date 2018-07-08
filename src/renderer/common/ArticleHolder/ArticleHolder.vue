<template>
  <div class="articleHolder">
      <div class="imgWrapper">
          <img src="./test.png"/>
      </div>
      <h4 class="title">这是标题这是标题这是标题这是标题</h4>
      <div class="handler">
          <span><i class="el-icon-view"></i> 10000</span>
          <span><i class="el-icon-view"></i> 0</span>
      </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  .articleHolder{
    width: 180px;
    padding-bottom: 10px;
    .imgWrapper{
        max-height: 100px;
        overflow: hidden;
        img{
            width: 100%;
        }
    }
    .title{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 4px 0;
    }
    .handler{
        color: #ccc;
        font-size: 12px;
        span{
            display: inline-block;
            margin-right: 14px;
        }
    }
  }
</style>
