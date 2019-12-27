<template>
  <div id="app">
    <Nav/>
    <!-- <News/> -->
     <router-view/>
    <PageNav/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
// import PageNavgation from './components/PageNavgation.vue'
import PageNav from '@/components/PageNav.vue'
// import News from '@/components/News.vue'

export default {
  name: 'home',
  components: {
    Nav,
    PageNav,
    // PageNavgation,
    // News
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
