<template>
  
    <div class="tab-item">
			<header class="tab-item-head">
				<h3 class="tab-item-title"><slot></slot></h3>
				<a class="more">更多</a>
			</header>
			<div class="tab-list-wrap" id="movie-top">
				<ul class="top-list">
					<li class="top-item top2" @click="toRank(1)">
						<h3 class="top-title">豆瓣 Top250</h3>
						<p class="top-style">8分以上好电影</p>
						<img src="/../static/pic/top1-1.png"/>
					</li>
					<li class="top-item top1" @click="toRank(2)">
						<h3 class="top-title">本周口碑榜</h3>
						<p class="top-style">{{currentweek}}</p>
						<img src="/../static/pic/top1-1.png"/>
					</li>
					
					<li class="top-item top3" @click="toRank(3)">
						<h3 class="top-title">新片榜</h3>
						<p class="top-style">{{currentweek}}</p>
						<img src="/../static/pic/top1-1.png"/>
					</li>
					<li class="top-item top4" @click="toRank(4)">
						<h3 class="top-title">票房榜</h3>
						<p class="top-style">票房排名最高</p>
						<img src="/../static/pic/top1-1.png"/>
					</li>
					
				</ul>
			</div>
			
		</div>
  
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		data(){
			return {
				currentweek : ''
			}
		},
		mounted(){
			this.current();
			this.addScrollForMovieTop();
		},
		methods: {
			current(){
        let date = new Date()
        let currentDay = date.getMonth() + 1 + '月' + date.getDate() + '日'
        let myDate = new Date()
        myDate.setDate(myDate.getDate() - 7);
        let beforeDay = myDate.getMonth() + 1 + '月' + myDate.getDate() + '日'

        this.currentweek = beforeDay + '~' + currentDay
     	},
     //跳转至排行榜页面
      toRank(index){
     	 this.$router.push({name:'rank',params:{id:index}})
      },
      addScrollForMovieTop(){
	  		let scroll = new BScroll(document.getElementById('movie-top'), {
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