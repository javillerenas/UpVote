<template>
  <div id="firebaseui-auth-container"></div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase/app'

const uiConfig = {
  signInSuccessUrl: '/vote',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
}
export default {
  computed: {
    ...mapGetters({
      fbUiApp: 'fbUiApp'
    })
  },
  mounted() {
    this.fbUiApp.start('#firebaseui-auth-container', uiConfig)
  },
  destroyed() {
    this.fbUiApp.reset()
  }
}
</script>

<style src="firebaseui/dist/firebaseui.css"></style>
