<template>
  <div class="hot-vedio">
    <title-bar title="影视推荐"/>
    <hot-vedio />
  </div>
</template>

<script>
  import TitleBar from '@/common/TitleBar/TitleBar';
  import HotVedio from '@/common/HotVedio/HotVedio';

  export default {
    components: {
      TitleBar,
      HotVedio
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  .hot-vedio{
    padding: 20px;
    background: #fff;
    margin-top: 10px;
  }
</style>
