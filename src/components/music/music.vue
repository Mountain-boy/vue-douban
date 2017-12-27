<template>
  <div class="movie" id="music-wrap">
		<div class="movie-scroll">
			<music-list :newSongList="newSongList">新歌榜单</music-list>
			<music-list :newSongList="hotSongList">热歌榜单</music-list>
			<music-list :newSongList="EurAndUsaSongList">欧美音乐榜</music-list>
		</div>
		
		
		
	</div>
  
</template>

<script>
	import MusicList from '@/components/music/musicList'
	
	import BScroll from 'better-scroll'
	import {Indicator} from 'mint-ui';
	export default {
		components: {
	  		MusicList
	  },
	  data(){
	  	return {
	  		newSongList: [],
	  		hotSongList: [],
	  		EurAndUsaSongList: []
	  	}
	  },
	  beforeCreate(){
	  	Indicator.open({text: '加载中...',spinnerType: 'fading-circle'});
	  },
	  mounted(){
	  	//获取新歌榜单
	  	this.getNewSongList();
	  	
	  	//获取热歌榜单
	  	this.getHotSongList();
	  	
	  	//获取欧美音乐榜单
	  	this.getEurAndUsaSongList();
	  	
	  	this.$nextTick(()=>{
				this.addScrollForMovie()
			})
	  },
	  methods: {
	  	
	  	getNewSongList(){
				setTimeout(()=>{
		      this.$http.get('/music'+'v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0').then((d)=>{
        		this.newSongList = d.data.song_list;
		        this.$nextTick(()=>{
							this.addScrollForMovie()
						})
		      }).then(()=>{
		      	 Indicator.close();
		      })
	    	}, 500)
	  	},
	  	
	  	getHotSongList(){
	  		setTimeout(()=>{
		      this.$http.get('/music'+'v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=10&offset=0').then((d)=>{
        		this.hotSongList = d.data.song_list;
		        this.$nextTick(()=>{
							this.addScrollForMovie()
						})
		      }).then(()=>{
		      	 Indicator.close();
		      })
	    	}, 500)
	  	},
	  	
	  	getEurAndUsaSongList(){
	  		setTimeout(()=>{
		      this.$http.get('/music'+'v1/restserver/ting?method=baidu.ting.billboard.billList&type=21&size=10&offset=0').then((d)=>{
        		this.EurAndUsaSongList = d.data.song_list;
		        this.$nextTick(()=>{
							this.addScrollForMovie()
						})
		      }).then(()=>{
		      	 Indicator.close();
		      })
	    	}, 500)
	  	},
	  	
	  	addScrollForMovie(){
	  		let scroll = new BScroll(document.getElementById('music-wrap'), {
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