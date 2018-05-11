<template>
  <div id="app">
   
   <NavBar />

   <router-view></router-view>

   
    
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import AppPosts from './components/AppPosts.vue'
import SinglePost from './components/SinglePost.vue'
import AddPost from './components/AddPost.vue'


export default {
  name: 'app',
  components: {
    NavBar,
    AppPosts,
    SinglePost,
    AddPost,
  }
}
</script>

<style>

</style>
