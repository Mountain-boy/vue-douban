<template>
  
    <div id="broadcast">
    	
	    	<header id="app-head">
		  		<custom-head>广播</custom-head>
		  	</header>
		  	<section id="content">
		  		<div class="broadcast-wrap">
		  			<div>
		  				
		  			
			  			<div class="broadcast-head">
			  				<div class="person-pic">
			  					<img src="../assets/img/ic_share_qq.png"/>
			  					<span>分享生活点滴...</span>
			  				</div>
			  				
			  			</div>
			  			<div class="broadcast-main">
			  				<ul class="broadcast-list">
			  					<li class="broadcast-item">
			  						<div class="item-head">
			  							<div class="item-head-img">
			  								<img src="../assets/img/ic_share_friends.png"/>
			  								<div class="name-info">
			  									<span class="name">康帅傅</span>
			  									<span class="info">上传了一张相片到相册</span>
			  								</div>
			  							</div>
			  							<div class="time-more">
			  								<time>19小时前</time>
			  								<span></span>
			  							</div>
			  						</div>
			  						<div class="item-content">
			  							<img src="../../static/pic/photo-1.png"/>
			  							<div class="item-content-info">
			  								<span class="title">我做的早餐会发光</span>
			  								<p class="text">说过说有什么能比爱更能温暖人心，那就是食物。（我的微博：七七小菇）</p>
			  							</div>
			  						</div>
			  						<div class="item-foot">
			  							<a class="praise">
			  								9
			  							</a>
			  							<a class="comment">
			  								9
			  							</a>
			  							<a class="share">
			  								9
			  							</a>
			  						</div>
			  					</li>
			  					<li class="broadcast-item">
			  						<div class="item-head">
			  							<div class="item-head-img">
			  								<img src="../assets/img/ic_share_friends.png"/>
			  								<div class="name-info">
			  									<span class="name">康帅傅</span>
			  									<span class="info">上传了一张相片到相册</span>
			  								</div>
			  							</div>
			  							<div class="time-more">
			  								<time>19小时前</time>
			  								<span></span>
			  							</div>
			  						</div>
			  						<div class="item-content">
			  							<img src="../../static/pic/photo-1.png"/>
			  							<div class="item-content-info">
			  								<span class="title">我做的早餐会发光</span>
			  								<p class="text">说过说有什么能比爱更能温暖人心，那就是食物。（我的微博：七七小菇）</p>
			  							</div>
			  						</div>
			  						<div class="item-foot">
			  							<a class="praise">
			  								9
			  							</a>
			  							<a class="comment">
			  								9
			  							</a>
			  							<a class="share">
			  								9
			  							</a>
			  						</div>
			  					</li>
			  					<li class="broadcast-item">
			  						<div class="item-head">
			  							<div class="item-head-img">
			  								<img src="../assets/img/ic_share_friends.png"/>
			  								<div class="name-info">
			  									<span class="name">康帅傅</span>
			  									<span class="info">上传了一张相片到相册</span>
			  								</div>
			  							</div>
			  							<div class="time-more">
			  								<time>19小时前</time>
			  								<span></span>
			  							</div>
			  						</div>
			  						<div class="item-content">
			  							<img src="../../static/pic/photo-1.png"/>
			  							<div class="item-content-info">
			  								<span class="title">我做的早餐会发光</span>
			  								<p class="text">说过说有什么能比爱更能温暖人心，那就是食物。（我的微博：七七小菇）</p>
			  							</div>
			  						</div>
			  						<div class="item-foot">
			  							<a class="praise">
			  								9
			  							</a>
			  							<a class="comment">
			  								9
			  							</a>
			  							<a class="share">
			  								9
			  							</a>
			  						</div>
			  					</li>
			  					<li class="broadcast-item">
			  						<div class="item-head">
			  							<div class="item-head-img">
			  								<img src="../assets/img/ic_share_friends.png"/>
			  								<div class="name-info">
			  									<span class="name">康帅傅</span>
			  									<span class="info">上传了一张相片到相册</span>
			  								</div>
			  							</div>
			  							<div class="time-more">
			  								<time>19小时前</time>
			  								<span></span>
			  							</div>
			  						</div>
			  						<div class="item-content">
			  							<img src="../../static/pic/photo-1.png"/>
			  							<div class="item-content-info">
			  								<span class="title">我做的早餐会发光</span>
			  								<p class="text">说过说有什么能比爱更能温暖人心，那就是食物。（我的微博：七七小菇）</p>
			  							</div>
			  						</div>
			  						<div class="item-foot">
			  							<a class="praise">
			  								9
			  							</a>
			  							<a class="comment">
			  								9
			  							</a>
			  							<a class="share">
			  								9
			  							</a>
			  						</div>
			  					</li>
			  					
			  				</ul>
			  			</div>
			  		</div>
		  		</div>
		  	</section>
		
			
	  </div>
  
</template>

<script>
	import CustomHead from '@/components/customhead'
  import BScroll from 'better-scroll'
	
	export default {
	  components: {
	  	CustomHead
	  },
	  mounted(){
	  	this.$nextTick(()=>{
				this.addScrollForBroadCast()
			})
	  },
	  methods: {
	  	addScrollForBroadCast(){
	  		let scroll1 = new BScroll(document.querySelector('.broadcast-wrap'), {
		  		startX: 0,
					startY: 0,
					scrollY: true,
					click: true
				});
	  	}
	  }
	}
</script>

<style lang="less">
	@rem: 69rem;
  #broadcast {
  	height: 100%;
  }
  .broadcast-wrap {
  	height: 100%;
  	overflow: hidden;
  	overflow-y: auto;
  	.broadcast-head {
  		height: 193/@rem;
  		padding: 0 60/@rem;
  		margin-bottom: 45/@rem;
  		border-top: 1px solid #b2b2b2;
  		border-bottom: 1px solid #b2b2b2;
  		background: #fff;
  		display: flex;
  		justify-content: space-between;
  		align-items: center;
  		.person-pic {
  			width: 480/@rem;
  			height: 100%;
  			display: flex;
  			justify-content: space-between;
  			align-items: center;
  			img{
  				width: 120/@rem;
  				height: 120/@rem;
  				border-radius: 50%;
  			}
  			span{
  				font-size: 42/@rem;
  				color: #b3b3b3;
  			}
  		}
  	}
  }
  
.broadcast-item{
	background: #fff;
	margin-bottom: 36/@rem;
	.item-head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 210/@rem;
		padding: 0 60/@rem;
		
		.item-head-img {
			width: 540/@rem;
			height: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			img {
				width: 120/@rem;
				height: 120/@rem;
				border-radius: 50%;
			}
			.name-info {
				height: 100%;
				width: 400/@rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				.name {
					display: block;
					
					font-size: 44/@rem;
					color: #000;
				}
				.info {
					display: block;
					font-size: 36/@rem;
					color: #9b9b9b;
				}
			}
		}
		.time-more{
			width: 240/@rem;
			height: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;
			time {
				font-size: 30/@rem;
			}
			span {
				width: 45/@rem;
				height: 10/@rem;
				background: url(../assets/img/ic_more_action_overflow.png) no-repeat;
				background-size: 45/@rem 10/@rem;
			}
		}
		
		
	}
	.item-content {
		height: 240/@rem;
		padding: 0 60/@rem;
		background: #f4f4f4;
		margin-bottom: 45/@rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		img {
			width: 150/@rem;
			height: 150/@rem;
		}
		.item-content-info {
			width: 900/@rem;
			.title {
				font-size: 40/@rem;
				color: #494949;
			}
			.text {
				font-size: 30/@rem;
				color: #9b9b9b;
			}
			
		}
		
	}
	
	.item-foot {
		height: 118/@rem;
		border-bottom: 1px solid #e5e5e5;
		border-top: 1px solid #e5e5e5;
		display: flex;
		justify-content: space-around;
		align-items: center;
		a {
			width: 100/@rem;
			height: 50/@rem;
			color: #9b9b9b;
			font-size: 40/@rem;
			line-height: 50/@rem;
			font-family: arial;
			text-align: end;
		}
		.praise:before{
			display: inline-block;
			content: '';
			width: 50/@rem;
			height: 50/@rem;
			background: url(../assets/img/ic_vote_normal_large.png) no-repeat;
			background-size: 50/@rem 50/@rem;
			vertical-align: middle;
		}
		.comment:before{
			display: inline-block;
			content: '';
			width: 50/@rem;
			height: 50/@rem;
			background: url(../assets/img/ic_album_photo_comment_normal.png) no-repeat;
			background-size: 50/@rem 50/@rem;
			vertical-align: middle;
		}
		.share:before{
			display: inline-block;
			content: '';
			width: 50/@rem;
			height: 50/@rem;
			background: url(../assets/img/ic_change_round.png) no-repeat;
			background-size: 50/@rem 50/@rem;
			vertical-align: middle;
		}
	}
	
	  
}  

</style>