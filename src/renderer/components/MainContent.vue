<template>
  <div id="wrapper">
    <top-header />
    <side-nav />
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import TopHeader from './TopHeader/TopHeader';
  import HomePage from './HomePage/HomePage';
  import SideNav from './SideNav/SideNav';

  export default {
    name: 'landing-page',
    components: {
      TopHeader,
      HomePage,
      SideNav
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style scoped lang="scss">
  .view{
    position: relative;
    margin-top: 52px;
    margin-left: 80px;
    background: #eee;
  }
</style>
