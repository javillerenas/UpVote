<template>
  <div id="app" class="is-marginless is-paddingledd">
    <div class="section header">
      <h2 class="title has-text-centered dividing-header">Hack-a-vote! ✂️💥</h2>
    </div>
    <router-view></router-view>
    <footer class="footer">
      <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header {
    padding: 3rem 1rem 1.5rem;
}

.footer {
    padding: 1rem;
}
</style>
