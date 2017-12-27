<template>
  <div class="movie" id="city-wrap">
		<div class="movie-scroll">
			<city-list :highScoreNovel="highestTheatreList">2016舞台剧榜单</city-list>
			<city-list :highScoreNovel="highScoreTheatreList">高分话剧榜</city-list>
			<city-list :highScoreNovel="highestMusicTheatre">音乐剧</city-list>
			<city-list :highScoreNovel="HighestSongTheatre">歌剧</city-list>
		</div>
	</div>
  
</template>

<script>
	import {Indicator} from 'mint-ui'
	import BScroll from 'better-scroll'
	import CityList from '@/components/city/cityList'
	export default {
		components: {
	  		CityList
	  },
	  data(){
	  	return {
	  		highestTheatreList: [],
	  		highScoreTheatreList: [],
	  		highestMusicTheatre: [],
	  		HighestSongTheatre: []
	  	}
	  },
		beforeCreate(){
	  	Indicator.open({text: '加载中...',spinnerType: 'fading-circle'});
	 	},
		mounted(){
			this.getHighScoreTheatre();
			this.getCarestNovel();
			this.getChineseNovel();
			this.getforeignNovel();
			
			this.$nextTick(()=>{
				this.addScrollForMovie()
			})
		},
		methods: {
			getHighScoreTheatre(){
				setTimeout(() => {
					this.$http.get('/city'+ 'ithil_j/activity/drama_annual2016/widget/1').then((d)=>{
						this.highestTheatreList = d.data.res.subjects;
						this.$nextTick(()=>{
							this.addScrollForMovie()
						});
					}).then(()=>{
						Indicator.close();
					})
				},500)
			},
			getCarestNovel(){
				setTimeout(() => {
					this.$http.get('/city'+ 'ithil_j/activity/drama_annual2016/widget/2').then((d)=>{
						this.highScoreTheatreList = d.data.res.subjects;
						this.$nextTick(()=>{
							this.addScrollForMovie()
						});
					}).then(()=>{
						Indicator.close();
					})
				},500)
			},
			getChineseNovel(){
				setTimeout(() => {
					this.$http.get('/city'+ 'ithil_j/activity/drama_annual2016/widget/3').then((d)=>{
						this.highestMusicTheatre = d.data.res.subjects;
						this.$nextTick(()=>{
							this.addScrollForMovie()
						});
					}).then(()=>{
						Indicator.close();
					})
				},500)
			},
			getforeignNovel(){
				setTimeout(() => {
					this.$http.get('/city'+ 'ithil_j/activity/drama_annual2016/widget/5').then((d)=>{
						this.HighestSongTheatre = d.data.res.subjects;
						this.$nextTick(()=>{
							this.addScrollForMovie()
						});
					}).then(()=>{
						Indicator.close();
					})
				},500)
			},
			addScrollForMovie(){
	  		let scroll = new BScroll(document.getElementById('city-wrap'), {
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