<template>
  <div class="monthBetter">
    <title-bar title="七月推荐"/>
    <flex-list :list="list"/>
  </div>
</template>

<script>
  import TitleBar from '@/common/TitleBar/TitleBar';
  import FlexList from '@/common/FlexList/FlexList';

  export default {
    props: {
      list: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },
    components: {
      TitleBar,
      FlexList
    }
  }
</script>

<style scoped lang="scss">
  .monthBetter{
    margin-top: 10px;
    padding: 20px;
    background: #fff;
  }
</style>
