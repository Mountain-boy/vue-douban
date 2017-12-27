<template>
  <div id="rank">
		<header id="app-head">
			<div class="rank-head" >
				<a class="back" @click="goback">返回</a>
				<h3 class="rank-title">
					<span>{{headTitle}}</span>
				</h3>
			</div>
		</header>
    <section class="rank-content">
    	<div class="rank-nav" v-if="$route.params.id == 1">
    		<ul class="rank-nav-list">
    			<li class="rank-nav-item" 
    				  v-for="item,index in rankNavList"
    				  :class="{active: currentPage == item.type}"
    				  @click="tab(item.type)">
    				  {{item.name}}
    			</li>
    			
    		</ul>
    	</div>
    	<div class="rank-main">
    		<ul class="rank-list">
    			<li class="rank-item" 
    				v-for="item,index in topList"
    				@click="toMovieDetail(item.id)">
    				<div class="item-title"
    					   :class="{'num1':index==0,'num2':index==1,'num3':index==2}"
    					>{{start + index+1}}</div>
    				<div class="item-content">
    					<div class="movie-img">
    						<img :src="item.images.small"/>
    					</div>
    					<div class="movie-info">
    						<h6 class="movie-name">{{item.title}}</h6>
    						<judge-star :averages="item.rating.average"></judge-star>
								<div class="director">导演：{{item.directors[0].name}}</div>
								<div class="actor">演员：<span v-for="items in item.casts">{{items.name}}</span></div>
    					</div>
    				</div>
    				<p class="text">{{item.original_title}}</p>
    			</li>
    			
    			
    		</ul>
    	</div>
    </section>
  </div>

</template>

<script>
 	import RankHead from '@/components/rank/rankTitle'
  import judgeStar from '@/components/judgestar'
 	import {Indicator} from 'mint-ui'
 	import BScroll from 'better-scroll'
  export default {
		components: {
			RankHead,
			judgeStar
		},
		data(){
			return {
				rankNavList: [{name: 'Top1-50',type: 1},{name: '51-100',type: 2},{name: '101-150',type : 3},
											{name: '151-200',type: 4},{name: '201-250',type: 5}],
				currentPage: 1,
				headTitle : '豆瓣 Top250',
				topList: [],
				start:0,
				collectNum:50
			}
		},
		
		beforeCreate(){
			Indicator.open({text: '加载中...',spinnerType: 'fading-circle'})
		},
		mounted(){
			this.$nextTick(()=>{
				this.addScrollForMovieDetail()
			});
			switch(this.$route.params.id*1){
				case 1: 
				this.headTitle = '豆瓣 Top250'
				this.getTop250()
				break;
				
				case 2:
				this.headTitle = '本周口碑榜'
				this.getWeekTop()
				break;
				
				case 3:
				this.headTitle = '新片榜'
				this.getNewTop()
				break;
				
				case 4:
				this.headTitle = '票房榜'
				this.getPriceTop()
				break;
			}
		},
		methods: {
			addScrollForMovieDetail(){
    		let scroll1 = new BScroll(document.querySelector('.rank-main'), {
		  		startX: 0,
					startY: 0,
					scrollY: true,
					click: true
				})
			
    },
			tab(index){
				this.currentPage = index;
				Indicator.open({text: '加载中...',spinnerType: 'fading-circle'})
				this.start = (index-1) *50;
				this.getTop250()
				
			},
			toMovieDetail(index){
				this.$router.push({name: 'movieDetail', params: {id: index}})
			},
			goback(){
				console.log(1);
				this.$router.go(-1)
			},
			//发起ajax请求Top250的数据
			getTop250(){
				setTimeout(()=>{
					this.$http.get('/v2/movie/top250?start='+this.start+'&count='+this.collectNum).then((d)=>{
						
						this.topList = d.data.subjects;
						this.$nextTick(()=>{
							this.addScrollForMovieDetail()
						});
					}).then(()=>{
						Indicator.close()
					})
				},100)
				
			},
			getWeekTop(){
				setTimeout(()=>{
					this.$http.get('v2/movie/in_theaters').then((d)=>{
						
						this.topList = d.data.subjects;
					}).then(()=>{
						Indicator.close()
					})
				},100)
				
			},
			getNewTop(){
				setTimeout(()=>{
					this.$http.get('v2/movie/in_theaters').then((d)=>{
						
						this.topList = d.data.subjects;
					}).then(()=>{
						Indicator.close()
					})
				},100)
				
			},
			getPriceTop(){
				setTimeout(()=>{
					this.$http.get('v2/movie/in_theaters').then((d)=>{
						
						this.topList = d.data.subjects;
					}).then(()=>{
						Indicator.close()
					})
				},100)
				
			}
		}
	}

</script>
<style lang="less">
	@rem: 69rem;
	#app-head {
		z-index: 999;
	}
  #rank {
  	width: 100%;
  	height: 100%;
  	.rank-head {
  		width: 100%;
  		height: 100%;
  		background: #f8f8f8;
  		position :relative;
  		z-index:9999;
  		background: #fff;
  		.back {
  			position: absolute;
  			padding-left: 20/@rem;
  			width: 200/@rem;
  			height: 132/@rem;
  			font-size: 52/@rem;
  			line-height: 132/@rem;
  			text-align: center;
  			&:before {
  				content: '';
  				display: block;
  				width: 72/@rem;
  				height: 72/@rem;
  				position: absolute;
  				left: 10/@rem;
  				top: 50%;
  				transform: translateY(-50%);
  				background: url(../assets/img/ic_bar_back_green.png) no-repeat;
  				background-size: 72/@rem 72/@rem;
  			}
  		}
  		.rank-title {
  			width: 350/@rem;
  			height: 100%;
  			margin: 0 auto;
  			font-size: 50/@rem;
  			text-align: center;
  			
  			span {
  				display: block;
  				height: 100%;
  				line-height: 130/@rem;
  			}
  		}
  		
  	}
  }
	.rank-content {
		width: 100%;
		height: 100%;
		padding-top: 132/@rem;
		box-sizing: border-box;
		position: relative;
		.rank-nav {
			width: 100%;
			height: 126/@rem;
			border-top: 1px solid #d8d8d8;
			border-bottom: 1px solid #d8d8d8;
			position: absolute;
			left: 0;
			top: 132/@rem;
			background: #ffffff;
			z-index: 999;
			.rank-nav-list {
				padding: 0 50/@rem;
				height: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.rank-nav-item{
					width: 150/@rem;
					height: 124/@rem;
					font-size: 36/@rem;
					line-height: 124/@rem;
					text-align: center;
					font-family: arial;
					font-weight: bold;
					color: #9b9b9b;
				}
				.active {
					border-bottom: 2/@rem solid #000;
					color: #000;
				}
			}
		}
	}
	
	.rank-main {
		height: 100%;
		padding-top: 128/@rem;
		box-sizing: border-box;
		overflow: hidden;
		overflow-y: auto;
	}
	.rank-list {
		padding: 90/@rem 54/@rem;
		.rank-item {
			height: 850/@rem;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			margin-bottom: 30/@rem;
			.item-title{
				width: 416/@rem;
				height: 52/@rem;
				text-align: center;
				font-size: 42/@rem;
				position: relative;
				
				&:before{
					position: absolute;
					left: 0;
					top: 50%;
					display: block;
					content: '';
					width: 150/@rem;
					height: 1px;
					background: #d8d8d8;
				}
				&:after{
					position: absolute;
					right: 0;
					top: 50%;
					display: block;
					content: '';
					width: 150/@rem;
					height: 1px;
					background: #d8d8d8;
				}
			}
			.num1 {
				color: #ff4055;
			}
			.num2 {
				color: #f98c56;
			}
			.num3 {
				color: #ffc160;
			}
			.item-content {
				width: 1130/@rem;
				height: 448/@rem;
				border: 2/@rem solid #cccccc;
				border-radius: 10/@rem;
				display: flex;
				justify-content: space-around;
				align-items: center;
				.movie-img {
					width: 242/@rem;
					height: 338/@rem;
					img {
						width: 242/@rem;
						height: 338/@rem;
					}
				}
				.movie-info {
					width: 790/@rem;
					height: 338/@rem;
					
					.movie-name {
						font-size: 46/@rem;
						color: #000;
						font-family: "微软雅黑";
						line-height: 70/@rem;
						margin-bottom: 10/@rem;
						
					}
					.director,.actor{
						font-size: 36/@rem;
						line-height: 50/@rem;
						
						color: #a4a4a4;
					}
					
				}
				
			}
			.text {
				width: 100%;
				font-size: 48/@rem;
			}
		}
	}

</style>
