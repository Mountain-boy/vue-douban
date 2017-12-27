<template>
  
    <div class="tab-item">
		<header class="tab-item-head">
			<h3 class="tab-item-title"><slot></slot></h3>
			<a href="" class="more">更多</a>
		</header>
		<div class="tab-list-wrap novel" >
			<ul class="tab-list">
				<li class="tab-list-item" v-for="item in highScoreNovel" @click="toReadDetail(item.id)">
					<div class="tab-list-item-pic">
						<img :src="item.cover"/>
					</div>
					<h6 class="tab-list-item-name ellipsis">{{item.title}}</h6>
					<judge-star :averages="item.rating"></judge-star>
				</li>
			</ul>
		</div>
		
	</div>
  
</template>

<script>
	import judgeStar from '@/components/judgestar'
	import BScroll from 'better-scroll'
	export default {
		props: ['highScoreNovel'],
		components: {
			judgeStar
		},
		mounted(){
			this.$nextTick(()=>{
				this.addScrollForHighScoreNovel()
			})
		},
		methods: {
			toReadDetail(index){
				console.log(1)
				this.$router.push({name:'read',params:{id:index}})
			},
			
			addScrollForHighScoreNovel(){
	  		let scroll1 = new BScroll(document.querySelectorAll('.novel')[0], {
				  startX: 0,
				  startY: 0,
				  scrollX: true,
				  click: true
				});
	  		let scroll2 = new BScroll(document.querySelectorAll('.novel')[1], {
				  startX: 0,
				  startY: 0,
				  scrollX: true,
				  click: true
				});
				let scroll3 = new BScroll(document.querySelectorAll('.novel')[2], {
				  startX: 0,
				  startY: 0,
				  scrollX: true,
				  click: true
				});
				let scroll4 = new BScroll(document.querySelectorAll('.novel')[3], {
				  startX: 0,
				  startY: 0,
				  scrollX: true,
				  click: true
				});
	  	}
		}
		
	}

	
</script>

<style>


</style>