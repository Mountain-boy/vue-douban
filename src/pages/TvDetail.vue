<template>
	<div id="moviedetail">
		
			<header id="app-head">
				<div class="movie-detail-head">
					<a class="back" @click="goBackOne">
						<span class="backtext">返回</span>
					</a>
					<div class="movie-detail-title">
						<span class="title">电视剧</span>
					</div>
					<a class="share"></a>
				</div>
			</header>
			<section id="movie-detail-content" class="tv-detail-wrap">
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
										<span class="year">{{year}}/</span>
										<span class="country">{{country}}</span>
										<span class="style" v-for="item in styleInfo">/{{item}}</span>
									</div>
									
									<div class="time">首播时间：{{pubdate}}</div>
									<div class="long">集数：共{{episodes}}集</div>
									<div class="long">单集片长：{{duration}}</div>
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
        tvDetail: {},
       	average: '',
        name: '',
        year: '',
        country: '',
        styleInfo: [],
        pubdate: '',
        episodes: '',
        duration: '',
        imgSrc: '',
        numRaters: '',
        content: '',
        
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
			      this.$http.get('/v2/movie/subject/'+this.$route.params.id).then((d)=>{
			      	console.log(d.data)
			      	this.average = d.data.rating.average*1;
			      	this.name = d.data.title;
			      	this.year = d.data.year;
			      	this.country = d.data.countries[0];
			      	this.styleInfo = d.data.genres;
					this.episodes = d.data.episodes_count;
			      	
			      	this.imgSrc = d.data.images.large;
			      	this.numRaters = d.data.ratings_count;
			      	this.content = d.data.summary;
			      	this.celebrityList = d.data.casts;
			      	
			      	this.directors = d.data.directors;
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
    		let scroll1 = new BScroll(document.querySelector('.tv-detail-wrap'), {
		  		startX: 0,
				startY: 0,
				scrollX: true,
				click: true
			});
			let scroll2 = new BScroll(document.querySelector('#tv-celebrity'), {
		  		startX: 0,
				startY: 0,
				scrollX: true,
				click: true
			});
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