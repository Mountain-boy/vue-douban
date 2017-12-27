<template>
  <div class="movie" id="read-wrap">
  	<div class="movie-scroll">
  		<read-list :highScoreNovel="highScoreNovelList">2016年度高分小说榜</read-list>
			<read-list :highScoreNovel="carestNovelList">最受关注小说榜</read-list>
			<read-list :highScoreNovel="chineseNovelList">中国文学榜</read-list>
			<read-list :highScoreNovel="foreignNovelList">外国文学榜</read-list>
  	</div>
		
	</div>
  
</template>

<script>
	import {Indicator} from 'mint-ui'
	import BScroll from 'better-scroll'
	import ReadList from '@/components/read/readList'
	export default {
		components: {
	  		ReadList
	  },
	  data(){
	  	return {
	  		highScoreNovelList: [],
	  		carestNovelList: [],
	  		chineseNovelList: [],
	  		foreignNovelList: []
	  	}
	  },
		beforeCreate(){
	  	Indicator.open({text: '加载中...',spinnerType: 'fading-circle'});
	 	},
		mounted(){
			this.getHighScoreNovel();
			this.getCarestNovel();
			this.getChineseNovel();
			this.getforeignNovel();
			
			this.$nextTick(()=>{
					this.addScrollForMovie()
			})
		},
		methods: {
			getHighScoreNovel(){
				setTimeout(() => {
					this.$http.get('/novel'+ 'ithil_j/activity/book_annual2016/widget/1').then((d)=>{
						this.highScoreNovelList = d.data.res.subjects;
						this.$nextTick(()=>{
								this.addScrollForMovie()
						})
					}).then(()=>{
						Indicator.close();
					})
				},500)
			},
			getCarestNovel(){
				setTimeout(() => {
					this.$http.get('/novel'+ 'ithil_j/activity/book_annual2016/widget/4').then((d)=>{
						this.carestNovelList = d.data.res.subjects;
						this.$nextTick(()=>{
								this.addScrollForMovie()
						})
					}).then(()=>{
						Indicator.close();
					})
				},500)
			},
			getChineseNovel(){
				setTimeout(() => {
					this.$http.get('/novel'+ 'ithil_j/activity/book_annual2016/widget/5').then((d)=>{
						this.chineseNovelList = d.data.res.subjects;
						this.$nextTick(()=>{
								this.addScrollForMovie()
						})
					}).then(()=>{
						Indicator.close();
					})
				},500)
			},
			getforeignNovel(){
				setTimeout(() => {
					this.$http.get('/novel'+ 'ithil_j/activity/book_annual2016/widget/6').then((d)=>{
						this.foreignNovelList = d.data.res.subjects;
						this.$nextTick(()=>{
								this.addScrollForMovie()
						})
					}).then(()=>{
						Indicator.close();
					})
				},500)
			},
			addScrollForMovie(){
	  		let scroll = new BScroll(document.getElementById('read-wrap'), {
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