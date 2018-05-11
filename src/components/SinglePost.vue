<template>

<div>
	
	<p>SinglePost</p>

	<div class="card" style="width: 18rem;">
 
  <div class="card-body">
    <h5 class="card-title">{{ posts.title }}</h5>
    <p class="card-text">{{ posts.text }}</p>
   
    
    
    
  </div>
</div>
</div>
	
</template>



<script>

import { posts } from '../services/Posts'
	
	export default {

		created() {

			posts.get(this.$route.params.id)
			.then((response)=>{
				this.posts = response.data
				console.log(this.posts)
			}).catch((error)=>{
				console.log(error)
			})


		},


		data() {

			return {

				posts: []
			}
		},

	}

</script>