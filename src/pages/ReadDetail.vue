<template>
	<div id="moviedetail">
		
			<header id="app-head">
				<div class="movie-detail-head">
					<a class="back" @click="goBackOne">
						<span class="backtext">返回</span>
					</a>
					<div class="movie-detail-title">
						<span class="title">小说</span>
					</div>
					<a class="share"></a>
				</div>
			</header>
			<section id="movie-detail-content" class="read-detail-wrap">
				<div>
					<div class="movie-detail-img">
						<img :src="largeImg"/>
					</div>
					<div class="movie-detail-info">
						<div class="movie-intro">
							<div class="text">
								<h3 class="movie-name">{{readDetail.title}}</h3>
								<div class="movie-style">
									<div class="">
										<span class="year">作者：{{author}}</span>
										<span class="country">{{readDetail.binding}}</span>
										<span class="style"></span>
									</div>
									<div class="ori-name">出版社：{{publisher}}</div>
									<div class="time">出版时间：{{pubdate}}</div>
									<div class="long">页数：{{pages}}页</div>
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
						<header class="head">作者介绍</header>
						<div class="celebrity-wrap">{{authorInfo}}</div>
					</div>
					<div class="stage-photo">
						<header class="head">售价信息</header>
						<div class="stage-photo-wrap">
							
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
        readDetail: {},
        publisher:'',
        largeImg:'',
        pubdate: '',
        author: '',
        pages: '',
        average: '',
        numRaters: '',
        content: '',
        authorInfo: '',
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
			      this.$http.get('/v2/book/'+this.$route.params.id).then((d)=>{
			      	this.readDetail = d.data;
			      	this.publisher = d.data.publisher;
			      	this.largeImg = d.data.images.large;
			      	this.pubdate = d.data.pubdate;
			      	this.author = d.data.author[0];
			      	this.pages = d.data.pages;
			      	this.average = this.readDetail.rating.average*1;
			      	this.numRaters = d.data.rating.numRaters;
			      	this.content = d.data.catalog;
			      	this.authorInfo = d.data.author_intro;
			      	this.getFullStar();
			      	this.$nextTick(()=>{
						this.addScrollForMovieDetail()
					})
			        console.log(this.readDetail)
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
    		let scroll1 = new BScroll(document.querySelector('.read-detail-wrap'), {
		  		startX: 0,
				startY: 0,
				scrollY: true,
				click: true
			});
    	}
     
    },
    components: {
      
    }
  }

</script>
<style lang="less" scoped>
  @rem: 69rem;
  .celebrity-wrap {
  	padding: 0 60/@rem;
  	font-size: 36/@rem;
  	color: #4b4c4e;
  }

</style>