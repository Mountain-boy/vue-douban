<template>
  <div id="bookvedio">
  	<header id="app-head">
  		<custom-head>书影音</custom-head>
  	</header>
  	<section id="content">
  		<div class="bookvedio-wrap">
			<div class="first" id="first">
				<book-vedio-nav v-model="selected">
					<book-vedio-nav-item id="movie">电影</book-vedio-nav-item>
					<book-vedio-nav-item id="read">读书</book-vedio-nav-item>
					<book-vedio-nav-item id="tv">电视</book-vedio-nav-item>
					<book-vedio-nav-item id="city">同城</book-vedio-nav-item>
					<book-vedio-nav-item id="music">音乐</book-vedio-nav-item>
				</book-vedio-nav>
				<span class="line" ref="line"></span>
			</div>
			<div class="book-vedio-main">
				
				<router-view></router-view>
				
			</div>
		</div>
  	</section>
	
	
  </div>
</template>

<script>
	import CustomHead from '@/components/customhead'
	import BookVedioNav from '@/components/bookvedionav'
	import BookVedioNavItem from '@/components/bookvedionavitem'
	import Movie from '@/components/movie'
	
	import BScroll from 'better-scroll'
	
	export default {
			data(){
				return {
					movie:'movie',
					read : 'read',
					tv : 'tv',
					city: 'city',
					music: 'music'
				}
			},
	  	components: {
	  		CustomHead,
	  		BookVedioNav,
	  		BookVedioNavItem,
	  		Movie
	  	},
	  	watch: {
	  		selected(){
	  			var line = this.$refs.line;
	  			var n = line.offsetWidth;
	  			line.style.transition = '.1s'
	  			
	  			switch(this.selected){
	  				case 'movie':
	  				line.style.left = n*0 + 'px'
		  			break;
		  			
		  			case 'read':
		  			line.style.left = n*1 + 'px'
		  			break;
		  			
		  			case 'tv':
		  			line.style.left = n*2 + 'px'
		  			break;
		  			
		  			case 'city':
		  			line.style.left = n*3 + 'px'
		  			break;
		  			
		  			case 'music':
		  			line.style.left = n*4 + 'px'
		  			break;
	  			}
	  		},
	  		$route(){
	  			//监控路由变化  
	  			var p = this.$route.path;
	  			if(p.indexOf('read') != -1){
		  			this.selected = 'read'
		  		}else if(p.indexOf('tv') != -1){
		  			this.selected = 'tv'
		  		}else if(p.indexOf('city') != -1){
		  			this.selected = 'city'
		  		}else if(p.indexOf('music') != -1){
		  			this.selected = 'music'
		  		}else if(p.indexOf('movie') != -1){
		  			this.selected = 'movie'
		  		}
						
	  		}
	  	},
	  	mounted(){
				
	  	},
	  	
			data(){
			  	return {
			  		selected: 'movie'
			  	}
			},
			methods: {
				routeChange(){
					console.log(1)
				}
			}
	}
</script>

<style>
	#bookvedio {
		height: 100%;
	}
	#first {
		z-index: 999;
	}
</style>