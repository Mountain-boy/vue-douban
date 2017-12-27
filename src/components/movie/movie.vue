<template>
  <div class="movie" id="movie">
		<div class="movie-scroll">
			<!--影院热映-->
			<movie-hot :movieHotList="movieHotList">影院热映</movie-hot>
			
			<!--影院即将上映-->
			<movie-will :movieWillList="movieWillList">影院即将上映</movie-will>
			
			<!--排行榜-->
			<movie-top>排行榜</movie-top>
		</div>
		
	</div>
  
</template>

<script>
	import MovieHot from '@/components/movie/moviehot'
	import MovieWill from '@/components/movie/moviewill'
	import MovieTop from '@/components/movie/movietop'
	
	import {Indicator} from 'mint-ui';
	import BScroll from 'better-scroll'
	
	export default {
		components: {
	  		MovieHot,
	  		MovieWill,
	  		MovieTop
	  },
	  data(){
	  	return {
	  		movieHotList: [],
	  		movieWillList: []
	  		
	  	}
	  },
	  beforeCreate(){
	  	Indicator.open({text: '加载中...',spinnerType: 'fading-circle'});
	  	
	  },
	  mounted(){
	  	this.getMovieHot();
	  	this.getMovieWill();
	  	this.$nextTick(()=>{
					this.addScrollForMovie()
			})
	  },
	  methods: {
	  	getMovieHot(){
				setTimeout(()=>{
		      this.$http.get('v2/movie/in_theaters?count=10&start=0').then((d)=>{
		      	this.movieHotList = d.data.subjects;
		        console.log(this.movieHotList)
		        this.$nextTick(()=>{
								this.addScrollForMovie()
						})
		      }).then(()=>{
		      	 Indicator.close();
		      	 
		      })
		    }, 500)
	  	},
	  	getMovieWill(){
	  		setTimeout(()=>{
		      this.$http.get('v2/movie/coming_soon?count=10&start=0').then((d)=>{
		      	this.movieWillList = d.data.subjects;
		        this.$nextTick(()=>{
								this.addScrollForMovie()
						})
		      }).then(()=>{
		      	 Indicator.close();
		      	 
		      })
		    }, 500)
	  		
	  	},
	  	addScrollForMovie(){
	  		let scroll = new BScroll(document.getElementById('movie'), {
				  startX: 0,
				  startY: 0,
				  scrollY: true
				})
	  	}
	  }
	}
</script>

<style lang="less">
	@rem: 69rem;
	.movie {
		height: 100%;
		overflow: hidden;
		box-sizing: border-box;
		.movie-scroll {
			padding: 0 0 30/@rem 0;
		}
	}
</style>