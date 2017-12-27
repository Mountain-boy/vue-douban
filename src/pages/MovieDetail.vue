<template>
	<div id="moviedetail">
		
			<header id="app-head">
				<div class="movie-detail-head">
					<a class="back" @click="goBackOne">
						<span class="backtext">返回</span>
					</a>
					<div class="movie-detail-title">
						<span class="title">电影</span>
					</div>
					<a class="share"></a>
				</div>
			</header>
			<section id="movie-detail-content" class="movie-detail-wrap">
				<div>
					<div class="movie-detail-img">
						<img :src="largeImg"/>
					</div>
					<div class="movie-detail-info">
						<div class="movie-intro">
							<div class="text">
								<h3 class="movie-name">{{movieDetail.title}}</h3>
								<div class="movie-style">
									<div class="">
										<span class="year">{{movieDetail.year}}</span>
										<span class="country" v-for="item in movieDetail.countries">/{{item}}</span>
										<span class="style" v-for="item in genres">/{{item}}</span>
										
									</div>
									<div class="ori-name">原名：{{movieDetail.original_title}}</div>
									<div class="time">上映时间：2017-5-6(中国大陆)</div>
									<div class="long">片长：129分钟</div>
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
								<div class="see">12614人</div>
							</div>
						</div>
						<div class="seewant">
							<span class="want">想看</span>
							<span class="seen">看过</span>
						</div>
					</div>
					<div class="content-validity">
						<header class="head">内容简介</header>
						<p class="validity-text ellipsis">{{movieDetail.summary}}</p>
					</div>
					<div class="celebrity">
						<header class="head">影人介绍</header>
						<div class="celebrity-wrap" id="movie-celebrity">
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
					<div class="stage-photo">
						<header class="head">剧照/预告片</header>
						<div class="stage-photo-wrap">
							<ul class="stage-photo-list">
								<li class="stage-photo-item"><img src="/../static/pic/pic2.png"/></li>
								<li class="stage-photo-item"><img src="/../static/pic/pic2.png"/></li>
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
        movieDetail: {},
        genres:[],
        largeImg:'',
        celebrityList: [],
        directors: [],
        average: '',
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
			      	this.movieDetail = d.data;
			      	this.genres = d.data.genres;
			      	this.largeImg = d.data.images.large;
			      	this.celebrityList = d.data.casts;
			      	this.directors = d.data.directors;
			      	this.average = this.movieDetail.rating.average*1;
			      	
			      	this.getFullStar();
			        console.log(this.movieDetail)
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
    		let scroll1 = new BScroll(document.querySelector('.movie-detail-wrap'), {
		  		startX: 0,
				startY: 0,
				scrollY: true,
				click: true
			});
			let scroll2 = new BScroll(document.querySelector('#movie-celebrity'), {
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
<style lang="scss" scoped>
  

</style>