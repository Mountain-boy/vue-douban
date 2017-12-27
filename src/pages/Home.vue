<template>
  <div id="my-douban">
  	<router-view></router-view>
		<footer id="footnav">
			<m-tabbar v-model="selected">
				<m-tabbar-item id="tab1">
					<img src="../assets/img/ic_tab_home_normal.png" slot="ico-normal"/>
					<img src="../assets/img/ic_tab_home_active.png" slot="ico-active"/>
					首页
				</m-tabbar-item>
				<m-tabbar-item id="tab2">
					<img src="../assets/img/ic_tab_subject_normal.png" slot="ico-normal"/>
					<img src="../assets/img/ic_tab_subject_active.png" slot="ico-active"/>
					书影音
				</m-tabbar-item>
				<m-tabbar-item id="tab3">
					<img src="../assets/img/ic_tab_status_normal.png" slot="ico-normal"/>
					<img src="../assets/img/ic_tab_status_active.png" slot="ico-active"/>
					广播
				</m-tabbar-item>
				<m-tabbar-item id="tab4">
					<img src="../assets/img/ic_tab_group_normal.png" slot="ico-normal"/>
					<img src="../assets/img/ic_tab_group_active.png" slot="ico-active"/>
					小组
				</m-tabbar-item>
				<m-tabbar-item id="tab5">
					<img src="../assets/img/ic_tab_profile_female_normal.png" slot="ico-normal"/>
					<img src="../assets/img/ic_tab_profile_female_active.png" slot="ico-active"/>
					我的
				</m-tabbar-item>
			</m-tabbar>
		</footer>
  </div>
</template>

<script>
import FootNav from '@/components/Footnav'
import mTabbar from '@/components/mtabbar'
import mTabbarItem from '@/components/mtabbarItem'
export default {
  	components: {
  		mTabbar,
  		mTabbarItem
  	},
		data(){
		  	return {
		  		selected: 'tab1'
		  	}
		},
		watch:{
			$route(){
				//监控路由变化  
				let p = this.$route.path;
				if(p.indexOf('bookvedio') != -1){
		  			this.selected = 'tab2'
		  		}else if(p.indexOf('broadcast') != -1){
		  			this.selected = 'tab3'
		  		}else if(p.indexOf('team') != -1){
		  			this.selected = 'tab4'
		  		}else if(p.indexOf('mine') != -1){
		  			this.selected = 'tab5'
		  		}else if(p.indexOf('firstpage') != -1){
		  			this.selected = 'tab1'
		  		}
						
			}
		}
}
</script>

<style>

</style>