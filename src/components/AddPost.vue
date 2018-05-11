<template>
  <div>
Add Post

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous"> 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

<form @submit.prevent="addPost" @reset= "resetForm">
  <div class="form-group row">
    <label for="text" class="col-4 col-form-label">Post Title</label> 
    <div class="col-8">
      <div class="input-group">
        <div class="input-group-addon">
          <i class="fa fa-address-card"></i>
        </div> 
        <input v-model = "newPost.title" class="form-control here" type="text">
      </div>
    </div>
  </div>
  <div class="form-group row">
    <label for="text1" class="col-4 col-form-label">Text</label> 
    <div class="col-8">
      <input v-model = "newPost.text" class="form-control here" type="textarea">
    </div>
  </div> 
  <div class="form-group row">
    <div class="offset-4 col-8">
      <button name="submit" type="submit" class="btn btn-primary">Submit</button>
      <input  type="reset" value="Reset the form">

    </div>
  </div>
</form>

  </div>
</template>

<script>

import { posts } from '../services/Posts'

export default {

	data() {

  	return { 

       newPost:{

  		  title: '',
  		  text: '',

  	  }



  }

},
	methods : {

  	addPost(){

  		posts.add(this.newPost)
    		.then((response)=>{
    			this.$router.push('/posts')
    			console.log(this.posts)
    		}).catch((error)=>{
    			console.log(error)
          console.log(this.posts)
    		})

  		},

      resetForm() {
        this.newPost = {

          title: '',
          text: '',

        }
      }

 	},

 


}
</script>
