<template>
  <h2 class="titlebar">
    {{title}}
  </h2>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    components: {
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  .titlebar{
      font-size: 20px;
      color: #C0C0C0;
  }
</style>
