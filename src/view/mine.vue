<template>
  
    <div id="mine">
    	
		  	<header id="app-head">
		  		<custom-head>我的</custom-head>
		  	</header>
		  	<section id="content">
		  		<div class="mine-wrap">
		  			<div>
			  			<div class="mine-head">
			  				<img src="../assets/img/ic_share_qq.png"/>
			  				<div class="mine-info">
			  					<div class="mine-info-id">
			  						<div class="name-id">
			  							<span class="name">Center</span>
			  							<span class="id">ID:123456789</span>
			  						</div>
			  					</div>
			  					<div class="care-info">
			  						<span>关注7</span>
			  						<span>被关注7</span>
			  					</div>
			  				</div>
			  			</div>
			  			<div class="mine-func">
			  				<ul class="mine-func-list">
			  					<li class="mine-func-item">
			  						<img src="../assets/img/ic_my_likes.png"/>
			  						<span>喜欢</span>
			  					</li>
			  					<li class="mine-func-item">
			  						<img src="../assets/img/ic_my_note.png"/>
			  						<span>日记</span>
			  					</li>
			  					<li class="mine-func-item">
			  						<img src="../assets/img/ic_my_album.png"/>
			  						<span>相册</span>
			  					</li>
			  					<li class="mine-func-item">
			  						<img src="../assets/img/ic_my_status.png"/>
			  						<span>我的广播</span>
			  					</li>
			  					<li class="mine-func-item">
			  						<img src="../assets/img/ic_my_movies_tvs.png"/>
			  						<span>电影电视</span>
			  					</li>
			  					<li class="mine-func-item">
			  						<img src="../assets/img/ic_my_books.png"/>
			  						<span>读书</span>
			  					</li>
			  					<li class="mine-func-item">
			  						<img src="../assets/img/ic_my_music.png"/>
			  						<span>音乐</span>
			  					</li>
			  					<li class="mine-func-item">
			  						<img src="../assets/img/ic_my_events.png"/>
			  						<span>同城活动</span>
			  					</li>
			  					<li class="mine-func-item">
			  						<img src="../assets/img/ic_my_likes.png"/>
			  						<span>豆瓣时间</span>
			  					</li>
			  					<li class="mine-func-item">
			  						<img src="../assets/img/ic_my_doulist.png"/>
			  						<span>豆列</span>
			  					</li>
			  					<li class="mine-func-item">
			  						<img src="../assets/img/ic_my_orders.png"/>
			  						<span>订单</span>
			  					</li>
			  					<li class="mine-func-item">
			  						<img src="../assets/img/ic_my_wallet.png"/>
			  						<span>钱包</span>
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
	  		let scroll1 = new BScroll(document.querySelector('.mine-wrap'), {
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
	#mine {
		height: 100%;
	}
	.mine-wrap {
		height: 100%;
		overflow: hidden;
		overflow-y: auto;
	}
	.mine-head {
		height: 375/@rem;
		padding: 0 60/@rem;
		margin-bottom: 45/@rem;
		border-top: 1px solid #ad6f34;
		background: #f79e4a;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		img {
			width: 210/@rem;
			height: 210/@rem;
			border-radius: 50%;
		}
		.mine-info {
			width: 852/@rem;
			height: 350/@rem;
			.mine-info-id {
				height: 175/@rem;
				border-bottom: 1px solid rgba(255,255,255,.5);
				display: flex;
				justify-content: space-between;
				align-items: center;
				.name-id {
					width: 350/@rem;
					color: #fff;
					
					.name {
						display: block;
						font-size: 60/@rem;
					}
					.id {
						display: block;
						font-size: 40/@rem;
					}
				}
			}
			.care-info {
				height: 149/@rem;
				span{
					font-size: 38/@rem;
					color: #fff;
					line-height: 149/@rem;
				}
			}
		}
	}
	.mine-func {
		height: 927/@rem;
		background: #fff;
		.mine-func-list {
			height: 100%;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			/*align-content: flex-start;*/
			flex-wrap: wrap;
			.mine-func-item {
				width: 300/@rem;
				height: 300/@rem;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				img {
					width: 72/@rem;
					height: 72/@rem;
				}
				span {
					font-size: 36/@rem;
					font-family: "微软雅黑";
					line-height: 50/@rem;
				}
			}
		}
	}
</style>