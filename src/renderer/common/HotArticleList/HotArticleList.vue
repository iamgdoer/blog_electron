<template>
  <ul class="hot-article-list">
    <li><span class="hot">1</span> 周六夜现场 第一季</li>
    <li><span class="hot">2</span> 极限挑战 第四季</li>
    <li><span class="hot">3</span> 欢乐喜剧人 第四季</li>
    <li><span>4</span> 晓说</li>
    <li><span>5</span> 真相吧！花花万物 第一季</li>
    <li><span>6</span> 品·尝中国WOKnWINEIJDINDDD</li>
    <li><span>7</span> 高能少年团 第二季</li>
    <li><span>8</span> 歌手 2018</li>
    <li><span>9</span> 这！就是街舞 第一季</li>
    <li><span>10</span> 爱情保卫战 2018</li>
  </ul>
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
  .hot-article-list{
    li{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    span{
      display: inline-block;
      width: 20px;
      height: 22px;
      color: #fff;
      line-height: 22px;
      text-align: center;
      background: #ccc;
      margin-top: 10px;
    }
    .hot{
      background: #eb3643;
    }
  }
</style>
