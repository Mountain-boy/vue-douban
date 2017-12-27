<template>
  
	<div class="tab-item">
			
				<header class="tab-item-head">
					<h3 class="tab-item-title"><slot></slot></h3>
					<a class="more">更多</a>
				</header>
				<div class="tab-list-wrap" id="movie-hot">
					<ul class="tab-list">
						<li class="tab-list-item"
								v-for="item in movieHotList"
								@click="toMovieDetail(item.id)"
							>
							<div class="tab-list-item-pic">
								<img :src="item.images.small"/>
							</div>
							<h6 class="tab-list-item-name ellipsis">{{item.title}}</h6>
							<judge-star :averages="item.rating.average"></judge-star>
						</li>
					</ul>
				</div>
			
		
	</div>
  
</template>

<script>
	import judgeStar from '@/components/judgestar'
	import BScroll from 'better-scroll'
	
	export default {
		components: {
			judgeStar
		},
		props:['movieHotList'],
		data(){
			return {
				
			}
		},
		computed: {
			
		},
		mounted(){
			this.$nextTick(()=>{
				this.addScrollForMovieHot()
			})
		},
		methods: {
			toMovieDetail(index){
				this.$router.push({name: 'movieDetail', params: {id: index}})
			},
			addScrollForMovieHot(){
	  		let scroll = new BScroll(document.getElementById('movie-hot'), {
				  startX: 0,
				  startY: 0,
				  scrollX: true,
				  click: true
				})
	  	}
			
		}
		
	}

	
</script>

<style>


</style>