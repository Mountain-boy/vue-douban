<template>
	<div id="moviedetail">
		
			<header id="app-head">
				<div class="movie-detail-head">
					<a class="back" @click="goBackOne">
						<span class="backtext">返回</span>
					</a>
					<div class="movie-detail-title">
						<span class="title">音乐</span>
					</div>
					<a class="share"></a>
				</div>
			</header>
			<section id="movie-detail-content" class="music-detail-wrap">
				<div>
					<div class="movie-detail-img">
						<img :src="imgSrc"/>
					</div>
					<div class="movie-detail-info">
						<div class="movie-intro">
							<div class="text">
								<h3 class="movie-name">{{name}}</h3>
								<div class="movie-style">
									<div class="">
										<span class="year">歌手：</span>
										<span class="country" v-for="item in singer">{{item}}</span>
										<!--<span class="style">{{styleInfo}}</span>-->
									</div>
									
									<div class="time">发行时间：{{pubdate}}</div>
									<div class="long">格式：{{styleInfo}}</div>
									<div class="long">发行商：{{publisher}}</div>
								</div>
								
							</div>
							<div class="judegment">
								<div class="judge-title">豆瓣评分</div>
								<div class="score">{{average}}</div>
								<div class="judge-image">
									<img src="../assets/img/start_01.png" 
										 class="star"
										 v-for="item in fullStar"
										 />
									<img src="../assets/img/star_02.png" 
										 class="star"
										 v-for="item in halfStar"
										 />
									<img src="../assets/img/star_03.png" 
										 class="star"
										 v-for="item in emptyStar"
										/>
									
								</div>
								<div class="see">{{numRaters}}人</div>
							</div>
						</div>
						<div class="seewant">
							<span class="want">想看</span>
							<span class="seen">看过</span>
						</div>
					</div>
					<div class="content-validity">
						<header class="head">内容简介</header>
						<p class="validity-text ellipsis">{{content}}</p>
					</div>
					<div class="celebrity">
						<header class="head">演员介绍</header>
						<div class="celebrity-wrap" id="tv-celebrity">
							<ul class="celebrity-list">
								<li class="celebrity-item" v-for="item in directors">
									<div class="celebrity-item-img"><img :src="item.avatars.small"/></div>
									<div class="celebrity-item-name ellipsis">{{item.name}}</div>
									<div class="position">导演</div>
								</li>
								<li class="celebrity-item" v-for="item in celebrityList">
									<div class="celebrity-item-img"><img :src="item.avatars.small"/></div>
									<div class="celebrity-item-name ellipsis">{{item.name}}</div>
									<div class="position">演员</div>
								</li>
								
								
							</ul>
						</div>
					</div>
				</div>
			</section>
		
	</div>
  
	
</template>
<script>
  import {Indicator} from 'mint-ui';
  import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        musicDetail: {},
       	average: '',
        name: '',
        styleInfo: [],
        pubdate: '',
        publisher: '',
        episodes: '',
        duration: '',
        imgSrc: '',
        numRaters: '',
        content: '',
        singer: [],
        directors:[],
        celebrityList:[],
        
        fullStar: '',
		halfStar: '',
		emptyStar: ''
      }
    },
    beforeCreate(){
    	Indicator.open({text: '加载中...',spinnerType: 'fading-circle'});
    },
    mounted(){
    	this.getMovieDetailById();
		this.$nextTick(()=>{
			this.addScrollForMovieDetail()
		})
			
    },
    methods: {
    	//获取电影详情
        getMovieDetailById(){
	      	setTimeout(()=>{
			      this.$http.get('/v2/music/search?q='+this.$route.params.id).then((d)=>{
			      	this.musicDetail = d.data.musics[0];
			      	console.log(d.data.musics[0]);
			      	this.average = d.data.musics[0].rating.average*1;
			      	this.name = d.data.musics[0].title;
			      	this.imgSrc = d.data.musics[0].image;
			      	this.numRaters = d.data.musics[0].rating.numRaters;
					this.styleInfo = d.data.musics[0].attrs.media[0];
					this.pubdate = d.data.musics[0].attrs.pubdate[0];
					this.singer = d.data.musics[0].attrs.singer;
					this.publisher = d.data.musics[0].attrs.publisher[0];
			      	this.getFullStar();
			      	this.$nextTick(()=>{
						this.addScrollForMovieDetail()
					})
			        
			      }).then(()=>{
			      	 Indicator.close();
			      })
			    }, 500)
        },
    	//计算星评 
        getFullStar(){
     		this.fullStar = Number.parseInt(this.average/2);
			this.emptyStar = Math.floor(5 - (this.average/2))
			this.halfStar = 5 - this.fullStar - this.emptyStar
		},
		//返回上一级菜单
    	goBackOne(){
    		this.$router.go(-1)
    	},
    	
    	addScrollForMovieDetail(){
    		let scroll1 = new BScroll(document.querySelector('.music-detail-wrap'), {
		  		startX: 0,
				startY: 0,
				scrollY: true,
				click: true
			})
			
    	}
     
    },
    components: {
      
    }
  }

</script>
<style lang="less">
	
  .celebrity-item-name {
  	text-align: center;
  }
  

</style>