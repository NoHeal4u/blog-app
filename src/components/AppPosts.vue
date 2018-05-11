<template>
<div>
	
	<p>AppPosts</p>

	<div class="card" style="width: 18rem;" v-for="(post, index) in posts">
 
  <div class="card-body">
    <h5 class="card-title">{{ post.title }}</h5>
    <p class="card-text">{{ post.text }}</p>
    
    
    
  </div>
</div>
</div>
	
</template>



<script>

import { posts } from '../services/Posts'
	
	export default {

		created() {

			posts.getAll()
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