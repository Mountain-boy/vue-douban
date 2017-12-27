<template>
  <div id="welcome">
		<img src="../assets/img/ic_logo_large.png"/>
		<div class="text">
			终于等到你
		</div>
		
  </div>

</template>

<script>
 	
  export default {
		mounted(){
			setTimeout(this.toMainPage,3000)
		},
		methods: {
			toMainPage(){
				this.$router.push({path:'/home'})
			}
		}
	}

</script>
<style lang="less">
	@rem: 69rem;
	#welcome {
		height: 100%;
		background: #fff;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		img {
			width: 512/@rem;
			height: 512/@rem;
		}
		.text {
			font-size: 52/@rem;
		}
	}

</style>
