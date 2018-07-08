<template>
  <div class="homePage">
    <swiper />
    <month-better :list="recommends"/>
    <article-better />
    <div class="twitter">
      <wangyi-music />
    </div>
  </div>
</template>

<script>
  import Swiper from '@/components/Swiper/Swiper'
  import MonthBetter from '@/components/MonthBetter/MonthBetter'
  import ArticleBetter from '@/components/ArticleBetter/ArticleBetter'
  import WangyiMusic from '@/components/WangyiMusic/WangyiMusic'

  export default {
    data () {
      return {
        recommends: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      };
    },
    components: {
      Swiper,
      MonthBetter,
      ArticleBetter,
      WangyiMusic
    },
    methods: {
    }
  }
</script>

<style>
  .homePage{
    padding:0 10px;
  }
</style>
