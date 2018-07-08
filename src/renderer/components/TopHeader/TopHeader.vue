<template>
  <div class="topHeader">
		<h1 class="logo">春田物志</h1>
		<div class="selectBox">
			<el-input prefix-icon="el-icon-search" placeholder="Search..."/>
		</div>
  </div>
</template>

<script>
  export default {
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style scoped lang="scss">
	.topHeader{
		position: fixed;
		top: 0;
		width: 100%;
		padding: 6px 10px;
		zoom: 1;
		z-index: 100;
		background: #fff;
		.logo{
			position: absolute;
			left: 50%;
			margin-left: -100px;
			width: 200px;
		}
		.selectBox{
			float: right;
			width: 250px;
		}
		&:after {
				content: ".";
        clear: both;
        display: block;
				overflow: hidden;
				font-size: 0;
				height: 0;
			}
	}
</style>
