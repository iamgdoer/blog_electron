<template>
  <div class="article-better">
    <div class="article-other">
      <title-bar title="最近文章"/>
      <flex-list :list="list" :count="4"/>
    </div>
    <div class="article-web">
      <title-bar title="Web前端"/>
      <hot-article-list />
    </div>
  </div>
</template>

<script>
  import TitleBar from '@/common/TitleBar/TitleBar';
  import FlexList from '@/common/FlexList/FlexList';
  import HotArticleList from '@/common/HotArticleList/HotArticleList';

  export default {
    data () {
      return {
        list: [1, 2, 3, 4, 5, 6, 7, 8]
      };
    },
    components: {
      TitleBar,
      FlexList,
      HotArticleList
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
.article-better{
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #fff;
  margin-top: 10px;
  .article-other{
    width: 80%;
  }
  .article-web{
    width: 19%;
  }
}
</style>
