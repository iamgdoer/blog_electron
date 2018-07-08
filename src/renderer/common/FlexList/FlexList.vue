<template>
  <div class="flex-list">
    <div class="list" v-for="(item, index) in pageList" :key="index">
      <article-holder v-for="(child, index) in item.list" :key="index"/>
    </div>
  </div>
</template>

<script>
  import ArticleHolder from '@/common/ArticleHolder/ArticleHolder';

  export default {
    data () {
      return {
        itemList: [],
        pageList: []
      };
    },
    props: {
      list: {
        type: Array,
        default: function () {
          return [];
        }
      },
      count: {
        type: Number,
        default: 5
      }
    },
    components: {
      ArticleHolder
    },
    mounted () {
      this.initItem();
    },
    methods: {
      initItem () {
        for (let i = 0; i < this.list.length; i++) {
          this.itemList.push(this.list[i]);
          if (this.itemList.length >= this.count) {
            this.pageList.push({
              list: this.itemList
            });
            this.itemList = [];
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .flex-list{
    .list{
      display: flex;
      justify-content: space-around;
      margin-top: 10px;
    }
  }
</style>
