<template>
  <div id="firstpage">
  	<header id="app-head">
  		<m-search></m-search>
  	</header>
  	<section id="content">
  		<first-content></first-content>
  	</section>
	
	
  </div>
</template>

<script>

	import mSearch from '@/components/search'
	import firstContent from '@/components/firstContent'

	export default {
	  	components: {
	  		mSearch,
	  		firstContent
	  	},
		data(){
		  	return {
		  		
		  	}
		}
	}
</script>

<style>
	#firstpage {
		height: 100%;
	}
</style>