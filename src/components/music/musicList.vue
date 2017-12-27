<template>
  
    <div class="tab-item">
			<header class="tab-item-head">
				<h3 class="tab-item-title"><slot></slot></h3>
				<a class="more">更多</a>
			</header>
			<div class="tab-list-wrap music">
				<ul class="tab-list">
					<li class="tab-list-item" 
						  v-for="item in newSongList"
						  @click="toMusicDetail(item.title)"
						  >
						<div class="tab-list-item-pic">
							<img :src="item.pic_small"/>
						</div>
						<h6 class="tab-list-item-name ellipsis">{{item.title}}</h6>
						<p class="wantsee ellipsis">{{item.author}}</p>
					</li>
					
					
					
				</ul>
			</div>
			
		</div>
  
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		props:['newSongList'],
		data(){
			return {
				
			}
		},
		mounted(){
			this.$nextTick(()=>{
				this.addScrollForMusic()
			})
		},
		methods: {
			toMusicDetail(index){
				this.$router.push({name:'music',params:{id:index}})
			},
			addScrollForMusic(){
				let scroll1 = new BScroll(document.querySelectorAll('.music')[0], {
				  startX: 0,
				  startY: 0,
				  scrollX: true,
				  click: true
				});
	  		let scroll2 = new BScroll(document.querySelectorAll('.music')[1], {
				  startX: 0,
				  startY: 0,
				  scrollX: true,
				  click: true
				});
				let scroll3 = new BScroll(document.querySelectorAll('.music')[2], {
				  startX: 0,
				  startY: 0,
				  scrollX: true,
				  click: true
				});
			}
		}
		
	}

	
</script>

<style lang="less" scoped>
		/*@rem: 69rem;
		.tab-item .tab-list-wrap .tab-list .tab-list-item .tab-list-item-pic img {
			width: 300/@rem;
			height: 300/@rem;
		}*/
</style>