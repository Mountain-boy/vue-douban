<template>
  
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
  
</template>

<script>
	
	export default {
		props: ['average'],
		data(){
			return {
				
				fullStar: '',
				halfStar: '',
				emptyStar: ''
			}
		},
		mounted(){
			
			this.getFullStar()
		},
		methods:{
			getFullStar(){
				
     			this.fullStar = Number.parseInt(this.average/2);
				this.emptyStar = Math.floor(5 - (this.average/2))
				this.halfStar = 5 - this.fullStar - this.emptyStar
			}
		}
	}

	
</script>

<style>


</style>