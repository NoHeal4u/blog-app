<template>
  <div id="app">
   
   <NavBar />
   <AppPosts />
    
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import AppPosts from './components/AppPosts.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    AppPosts
  }
}
</script>

<style>

</style>
