<template>
<div>
	
	<p>AppPosts</p>

	<div class="card bg-secondary text-white" style="width: 22rem;" v-for="(post, index) in posts">
 
  <div class="card-body">
    <h5 class="card-title">{{ post.title }}</h5>
    <div class="btn-group" role="group" aria-label="Basic example">
    <router-link class="btn btn-primary" :to="{ name: 'single-post', params: { id: post.id } }">View Post</router-link>
    <button class="btn btn-primary" v-on:click="deletePost(post.id , index)" >Delete Post</button>
     <router-link class="btn btn-primary" :to="{ name: 'edit', params: { id: post.id } }">Edit post</router-link>
    
    </div>
    
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

		methods: {

			deletePost(id, index) {

				posts.delete(id)
				.then((response)=>{
					this.posts.splice(index, 1)
				})
			}
		}



	}

</script>