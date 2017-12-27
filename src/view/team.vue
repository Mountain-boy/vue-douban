<template>
  
    <div id="team">
    	
		  	<header id="app-head">
		  		<custom-head>小组</custom-head>
		  	</header>
		  	<section id="content">
		  		<div class="team-wrap">
		  			<div>
			  			<div class="team-head">
			  				<ul class="team-head-list">
			  					<li class="team-head-item">
			  						<img src="../assets/img/ic_latest_group_topics.png"/>
			  						<span>最新话题</span>
			  					</li>
			  					<li class="team-head-item">
			  						<img src="../assets/img/ic_posted_group_topics.png"/>
			  						<span>发表的</span>
			  					</li>
			  					<li class="team-head-item">
			  						<img src="../assets/img/ic_replied_group_topics.png"/>
			  						<span>回应的</span>
			  					</li>
			  					<li class="team-head-item">
			  						<img src="../assets/img/ic_viewed_group_topics.png"/>
			  						<span>最近浏览</span>
			  					</li>
			  				</ul>
			  			</div>
			  			<div class="best-teams">
			  				<div class="best-teams-head">
			  					<h4 class="title">精选小组</h4>
			  					<a class="more"></a>
			  				</div>
			  				<div class="best-teams-content">
			  					<ul class="best-teams-list">
				  					<li class="best-teams-item">
				  						<img src="../../static/pic/team-1.png"/>
				  					</li>
				  					<li class="best-teams-item">
				  						<img src="../../static/pic/team-2.png"/>
				  					</li>
				  					
				  				</ul>
			  				</div>
			  			</div>
			  			<div class="myteam">我的小组</div>
			  			<div class="ofen-team">
			  				<div class="ofen-team-head">
			  					我常去的
			  				</div>
			  				<div class="ofen-team-content">
			  					<ul class="ofen-team-list">
			  						<li class="ofen-team-item">
			  							<div class="ofen-team-item-name">
			  								<img src="../../static/pic/team-o-1.png"/>
			  								<span>北京租房</span>
			  							</div>
			  						</li>
			  						<li class="ofen-team-item">
			  							<div class="ofen-team-item-name">
			  								<img src="../../static/pic/team-o-2.png"/>
			  								<span>86画室</span>
			  							</div>
			  						</li>
			  						<li class="ofen-team-item">
			  							<div class="ofen-team-item-name">
			  								<img src="../../static/pic/team-o-3.png"/>
			  								<span>黄光剑CG绘画视频教程</span>
			  							</div>
			  						</li>
			  						<li class="ofen-team-item">
			  							<div class="ofen-team-item-name">
			  								<img src="../../static/pic/team-o-4.png"/>
			  								<span>信马画室</span>
			  							</div>
			  						</li>
			  						
			  					</ul>
			  				</div>
			  			</div>
			  			<div class="more-team">
			  				<span>更多精彩小组等你加入</span>
			  				<a>去看看→</a>
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
	  		let scroll1 = new BScroll(document.querySelector('.team-wrap'), {
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
	#team {
		height: 100%;
		
	}
	.team-wrap {
			height: 100%;
			overflow: hidden;
			overflow-y: auto;
			.team-head {
				height: 270/@rem;
				padding: 0 60/@rem;
				border-top: 1px solid #777777;
				box-sizing: border-box;
				background: #fff;
				overflow: hidden;
				overflow-y: auto;
				margin-bottom: 45/@rem;
				.team-head-list {
					height: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.team-head-item {
						width: 190/@rem;
						height: 190/@rem;
						padding: 10/@rem;
						box-sizing: border-box;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: space-around;
						
						img {
							width: 64/@rem;
							height: 64/@rem;
						}
						span {
							font-size: 36/@rem;
							line-height: 60/@rem;
							color: #9b9b9b;
							font-family: "微软雅黑";
						}
						
					}
				}
			}
	}
	
	.best-teams {
		height: 462/@rem;
		background: #fff;
		.best-teams-head {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 132/@rem;
			padding: 0 60/@rem;
			border-bottom: 1px solid #9B9B9B;
			box-sizing: border-box;
			
			.title {
				font-size: 42/@rem;
				color: #494949;
			}
			.more {
				width: 50/@rem;
				height: 38/@rem;
				background: url(../assets/img/ic_groups_more.png) no-repeat;
				background-size: 50/@rem 38/@rem;
			}
		}
		.best-teams-content {
			height: 330/@rem;
			overflow: hidden;
			overflow-x: auto;
		}
		.best-teams-list {
			height: 330/@rem;
			padding: 0 60/@rem;
			width: 1185/@rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.best-teams-item {
				width: 570/@rem;
				height: 240/@rem;
				img {
					width: 570/@rem;
					height: 240/@rem;
					border-radius: 15/@rem;
				}
			}
		}
	}
	
	
	.myteam {
		padding: 0 60/@rem;
		height: 105/@rem;
		background: #f7f7f7;
		font-size: 34/@rem;
		color: #9b9b9b;
		line-height: 105/@rem;
	}
	.ofen-team {
		height: 912/@rem;
		margin-bottom: 45/@rem;
		background: #ffffff;
		.ofen-team-head {
			height: 130/@rem;
			padding: 0 60/@rem;
			font-size: 42/@rem;
			color: #000;
			font-family: "微软雅黑";
			font-weight: bold;
			line-height: 130/@rem;
		}
		.ofen-team-content {
			height: 780/@rem;
			border-top: 1px solid #b2b2b2;
			.ofen-team-list {
				padding: 0 60/@rem;
				.ofen-team-item {
					height: 192/@rem;
					border-bottom: 1px solid #b2b2b2;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.ofen-team-item-name {
						
						height: 120/@rem;
						img {
							width: 120/@rem;
							height: 120/@rem;
						}
						span {
							font-size: 40/@rem;
							color: #000;
						}
					}
				}
			}
		}
		
	}
	
	.more-team {
		height: 210/@rem;
		padding: 0 60/@rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		span {
			font-size: 52/@rem;
		}
		a {
			width: 285/@rem;
			height: 84/@rem;
			background: #42bd56;
			border-radius: 20/@rem;
			font-size: 44/@rem;
			line-height: 84/@rem;
			color: #fff;
			text-align: center;
		}
	}
</style>