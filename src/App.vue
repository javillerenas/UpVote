<template>
  <div id="app" class="is-marginless is-paddingledd">
    <router-view></router-view>
  </div>
</template>

<script>
import UpVote from '@/views/UpVote'

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
