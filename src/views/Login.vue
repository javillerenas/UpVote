<template>
  <section>
    <h1 v-if="!isValidUser && user !== null">
      Usted ingreso con <b>{{ user.email }}</b>
      <br/>Utilice una cuenta de Mulesoft para ingresar
    </h1>
    <div id="firebaseui-auth-container"></div>
  </section>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import firebase from "firebase/app";

const uiConfig = {
  signInSuccessUrl: "/vote",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
};
export default {
  computed: {
    ...mapState("user", ["user"]),
    ...mapGetters("user", ["isValidUser", "getFBUiApp"])
  },
  mounted() {
    this.getFBUiApp.start("#firebaseui-auth-container", uiConfig);
  },
  destroyed() {
    this.fbUiApp.reset();
  }
};
</script>

<style src="firebaseui/dist/firebaseui.css"></style>

