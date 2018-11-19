<template>
  <div id="app">
    <UpVote></UpVote>
  </div>
</template>

<script>
import UpVote from './components/UpVote'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    UpVote
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
