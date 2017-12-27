<template>
  
    <div class="tab-item">
			<header class="tab-item-head">
				<h3 class="tab-item-title"><slot></slot></h3>
				<a class="more">更多</a>
			</header>
			<div class="tab-list-wrap" id="movie-will">
				<ul class="tab-list">
					<li class="tab-list-item" 
						  v-for="item in movieWillList"
						  @click="toMovieDetail(item.id)"
						  >
						<div class="tab-list-item-pic">
							<img :src="item.images.small"/>
						</div>
						<h6 class="tab-list-item-name ellipsis">{{item.title}}</h6>
						<p class="wantsee">44234人想看</p>
					</li>
					
					
					
				</ul>
			</div>
			
		</div>
  
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		props:['movieWillList'],
		mounted(){
			this.$nextTick(()=>{
				this.addScrollForMovieWill()
			})
		},
		methods:{
			toMovieDetail(index){
				this.$router.push({name: 'movieDetail', params: {id: index}})
			},
			addScrollForMovieWill(){
	  		let scroll = new BScroll(document.getElementById('movie-will'), {
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