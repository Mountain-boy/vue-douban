<template>
  
    <a class="m-tabbar-item" 
    	:class="{active: isactive}"
    	@click="selectItem(id)"
    	>
		<span class="m-tabbar-item-ico" v-if="!isactive">
			<slot name="ico-normal"></slot>
		</span>
		<span class="m-tabbar-item-ico" v-if="isactive">
			<slot name="ico-active"></slot>
		</span>
		<span class="m-tabbar-item-text">
			<slot></slot>
		</span>
	</a>
  
</template>

<script>
export default {
	props: {
		id: String,
		value: String
	},
	
	data(){
		return {
			
		}
	},
	computed: {
		isactive(){
			return (this.$parent.value == this.id);
		}
	},
	methods: {
		selectItem(type){
			this.$parent.$emit('input',type);
			switch(type){
				case 'tab1':
				this.$router.push({path: '/home'})
				break;
				
				case 'tab2':
				this.$router.push({path: '/home/bookvedio'})
				break;
				
				case 'tab3':
				this.$router.push({path: '/home/broadcast'})
				break;
				
				case 'tab4':
				this.$router.push({path: '/home/team'})
				break;
				
				case 'tab5':
				this.$router.push({path: '/home/mine'})
				break;
			}
		}
	}
}
</script>

<style>


  
</style>