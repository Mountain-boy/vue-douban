<template>
	<div class="judge-star">
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
		<!--<img src="../assets/img/start_01.png" class="star"/>
		<img src="../assets/img/start_01.png" class="star"/>
		<img src="../assets/img/start_01.png" class="star"/>
		<img src="../assets/img/star_02.png" class="star"/>
		<img src="../assets/img/star_03.png" class="star"/>-->
		<span class="judge-score">{{this.averages}}</span>
	</div>
    
  
</template>

<script>
	export default {
		props: {
			averages:{type:Number}
		},
		data(){
			return {
				average: '',
				fullStar: '',
				halfStar: '',
				emptyStar: ''
			}
		},
		mounted(){
			this.getFullStar()
		},
		methods: {
			getFullStar(){
				this.fullStar = Number.parseInt(this.averages/2);
				this.emptyStar = Math.floor(5 - (this.averages/2))
				this.halfStar = 5 - this.fullStar - this.emptyStar
			}
			
		}
		
	}

	
</script>

<style>


</style>