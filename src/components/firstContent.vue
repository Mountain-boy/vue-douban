<template>
  		<div class="home" id='home'>
  			<div>
				<div class="banner">
					<ul class="banner-list">
						<li class="banner-item">
							<img src="/../static/pic/banner_1.png"/>
						</li>
						<li class="banner-item">
							<img src="/../static/pic/banner_1.png"/>
						</li>
						<li class="banner-item">
							<img src="/../static/pic/banner_1.png"/>
						</li>
						<li class="banner-item">
							<img src="/../static/pic/banner_1.png"/>
						</li>
					</ul>
				</div>
				<div class="hotnews">
					<header class="hot-head">
						<h3 class="hot-title">热点</h3>
					</header>
					<ul class="hotnews-list">
						<li class="hotnews-item">
							<div class="hotnews-text">
								<h6>唐僧说：西天真自由，连空气都是甜的</h6>
								<p class="info">来天竺是来学东西的，不是来抹黑或者洗白什么的。</p>
								
							</div>
							<img src="/../static/pic/tangseng-1.png"/>
							<p class="autor-info">
									<span class="autor">作者：熊太行</span>
							</p>
						</li>
						<li class="hotnews-item">
							<div class="hotnews-text">
								<h6>唐僧说：西天真自由，连空气都是甜的</h6>
								<p class="info">来天竺是来学东西的，不是来抹黑或者洗白什么的。来天竺是来学东西的，不是来抹黑或者洗白什么的。</p>
								
							</div>
							<img src="/../static/pic/tangseng-1.png"/>
							<p class="autor-info">
								<span class="autor">作者：熊太行</span>
							</p>
						</li>
					</ul>
				</div>
			
			
				<div class="douban-time">
					<header class="douban-time-head">
						<h3 class="douban-time-title">豆瓣时间</h3>
						<a href="" class="more">更多栏目</a>
					</header>
					<div class="douban-time-content" id="douban-time-content">
						<ul class="douban-time-list">
							<li class="douban-time-item">
								<div class="item-img">
									<img src="/../static/pic/douban_item-pic1.png"/>
								</div>
								<h6 class="item-title ellipsis">人性皆有裂缝，理解人格的52堂课是很有必要的</h6>
								<div class="item-info">共52期</div>
								<div class="author-info">
									<img src="/../static/pic/autor-pic-1.png"/>
									<div class="author">
										<div class="author-name">简里里</div>
										<p class="ellipsis">简单心理创始人，心理咨询师，心理专家</p>
									</div>
								</div>
								<div class="check-item">
									查看专栏
								</div>
							</li>
							<li class="douban-time-item">
								<div class="item-img">
									<img src="/../static/pic/douban_item-pic1.png"/>
								</div>
								<h6 class="item-title ellipsis">人性皆有裂缝，理解人格的52堂课是很有必要的</h6>
								<div class="item-info">共52期</div>
								<div class="author-info">
									<img src="/../static/pic/autor-pic-1.png"/>
									<div class="author">
										<div class="author-name">简里里</div>
										<p class="ellipsis">简单心理创始人，心理咨询师，心理专家</p>
									</div>
								</div>
								<div class="check-item">
									查看专栏
								</div>
							</li>
							<li class="douban-time-item">
								<div class="item-img">
									<img src="/../static/pic/douban_item-pic1.png"/>
								</div>
								<h6 class="item-title ellipsis">人性皆有裂缝，理解人格的52堂课是很有必要的</h6>
								<div class="item-info">共52期</div>
								<div class="author-info">
									<img src="/../static/pic/autor-pic-1.png"/>
									<div class="author">
										<div class="author-name">简里里</div>
										<p class="ellipsis">简单心理创始人，心理咨询师，心理专家</p>
									</div>
								</div>
								<div class="check-item">
									查看专栏
								</div>
							</li>
							<li class="douban-time-item">
								<div class="item-img">
									<img src="/../static/pic/douban_item-pic1.png"/>
								</div>
								<h6 class="item-title ellipsis">人性皆有裂缝，理解人格的52堂课是很有必要的</h6>
								<div class="item-info">共52期</div>
								<div class="author-info">
									<img src="/../static/pic/autor-pic-1.png"/>
									<div class="author">
										<div class="author-name">简里里</div>
										<p class="ellipsis">简单心理创始人，心理咨询师，心理专家</p>
									</div>
								</div>
								<div class="check-item">
									查看专栏
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	
  
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
	  mounted(){
	  	//给home主体绑定Scroll事件
	  	this.addScrollForHome();
	  	//给douban-time-content绑定Scroll事件
	  	this.addScrollForDoubanTime();
	  },
	  methods: {
	  	//给home主体添加滚动的事件（Y轴）
	  	addScrollForHome(){
	  		let scroll = new BScroll(document.getElementById('home'), {
			  startX: 0,
			  startY: 0,
			  scrollY: true,
			  click:true
			})
	  	},
	  	//给douban-time-content添加滚动的事件（X轴）
	  	addScrollForDoubanTime(){
	  		let scroll = new BScroll(document.getElementById('douban-time-content'), {
			  startX: 0,
			  startY: 0,
			  scrollX: true,
			  click:true
			})
	  	}
	  }
	}
</script>

<style>

</style>