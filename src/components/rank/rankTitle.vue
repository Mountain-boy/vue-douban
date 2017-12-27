<template>
  <header id="app-head">
		<div class="rank-head">
			<a class="back" @click="goback">返回</a>
			<h3 class="rank-title">
				<slot></slot>
			</h3>
		</div>
	</header>
  
</template>

<script>
	
	export default {
		methods: {
			goback(){
				console.log(1)
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
	
</style>