<template>
	<li class="book-vedio-item"
		:class="{active:isactive}"
		@click="selectItem(id)"
		>
		<a><slot></slot></a>
	</li>
  
</template>

<script>
export default {
  props: {
  	id: String
  },
  computed: {
  	isactive(){
  		return (this.$parent.value == this.id)
  	}
  },
  watch:{
//	$route(){
//		console.log(this.$route.path)
//	}
  },
  methods: {
  	selectItem(type){
  		this.$parent.$emit('input',type);
  		switch(type){
  			case 'movie':
  			this.$router.push({path:'/home/bookvedio/movie'})
  			break;
  			
  			case 'read':
  			this.$router.push({path:'/home/bookvedio/read'})
  			break;
  			
  			case 'tv':
  			this.$router.push({path:'/home/bookvedio/tv'})
  			break;
  			
  			case 'city':
  			this.$router.push({path:'/home/bookvedio/city'})
  			break;
  			
  			case 'music':
  			this.$router.push({path:'/home/bookvedio/music'})
  			break;
  		}
  		
  	}
  }
}
</script>

<style>


</style>