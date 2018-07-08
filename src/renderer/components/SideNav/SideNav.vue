<template>
  <ul class="sideNav">
    <router-link tag="li" :to="{path: '/'}">推荐</router-link>
    <router-link tag="li" :to="{path: '/chuntian'}">春田</router-link>
    <router-link tag="li" :to="{path: '/film'}">胶卷</router-link>
    <router-link tag="li" :to="{path: '/baike'}">百科</router-link>
    <router-link tag="li" :to="{path: '/tougao'}">投稿</router-link>
    <router-link tag="li" :to="{path: '/about'}">关于</router-link>
  </ul>
</template>

<script>
  export default {
    created () {
      console.log(this.$route.path);
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  .sideNav{
    position: fixed;
    top: 52px;
    left: 0;
    width: 80px;
    height: 100%;
    font-size: 14px;
    li{
      padding: 5px 8px;
      text-align: center;
      margin-top: 3px;
    }
    .router-link-exact-active{
      color: #fff;
      background: red;
    }
  }
</style>
