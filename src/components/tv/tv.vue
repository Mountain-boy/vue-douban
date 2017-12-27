<template>
  <div class="movie" id="tv-wrap">
  	<div class="movie-scroll">
  		<tv-list :tvData="hotTv">热门电视剧</tv-list>
			<tv-list :tvData="usaTv">美剧</tv-list>
			<tv-list :tvData="koraTv">韩剧</tv-list>
			<tv-list :tvData="japTv">日剧</tv-list>
  	</div>
		
	</div>
  
</template>

<script>
	import {Indicator} from 'mint-ui'
	import BScroll from 'better-scroll'
	import tvList from '@/components/tv/tvList'
	export default {
		components: {
	  		tvList
	  },
	  data(){
	  	return {
	  		hotTv: [],
	  		usaTv: [],
	  		koraTv: [],
	  		japTv: []
	  	}
	  },
		beforeCreate(){
	  	Indicator.open({text: '加载中...',spinnerType: 'fading-circle'});
	 	},
		mounted(){
			this.getHotTv();
			this.getUsaTv();
			this.getKoraTv();
			this.getJapTv();
			this.$nextTick(()=>{
				this.addScrollForMovie()
			})
		},
		methods: {
			getHotTv(){
				setTimeout(() => {
					this.$http.get('/tv'+ 'j/search_subjects?type=tv&tag=热门&sort=recommend&page_limit=10&page_start=0').then((d)=>{
						this.hotTv = d.data.subjects;
						this.$nextTick(()=>{
							this.addScrollForMovie()
						})
					}).then(()=>{
						Indicator.close();
					})
				},500)
			},
			getUsaTv(){
				setTimeout(() => {
					this.$http.get('/tv'+ 'j/search_subjects?type=tv&tag=美剧&sort=recommend&page_limit=10&page_start=0').then((d)=>{
						this.usaTv = d.data.subjects;
						this.$nextTick(()=>{
							this.addScrollForMovie()
						})
					}).then(()=>{
						Indicator.close();
					})
				},500)
			},
			getKoraTv(){
				setTimeout(() => {
					this.$http.get('/tv'+ 'j/search_subjects?type=tv&tag=韩剧&sort=recommend&page_limit=10&page_start=0').then((d)=>{
						this.koraTv = d.data.subjects;
						this.$nextTick(()=>{
							this.addScrollForMovie()
						})
					}).then(()=>{
						Indicator.close();
					})
				},500)
			},
			getJapTv(){
				setTimeout(() => {
					this.$http.get('/tv'+ 'j/search_subjects?type=tv&tag=日剧&sort=recommend&page_limit=10&page_start=0').then((d)=>{
						this.japTv = d.data.subjects;
						this.$nextTick(()=>{
							this.addScrollForMovie()
						})
					}).then(()=>{
						Indicator.close();
					})
				},500)
			},
			addScrollForMovie(){
	  		let scroll = new BScroll(document.getElementById('tv-wrap'), {
				  startX: 0,
				  startY: 0,
				  scrollY: true
				  
				})
	  	}
			
		}
	}
</script>

<style>
	
</style>