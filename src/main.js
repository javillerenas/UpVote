import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import VueFire from "vuefire";
import "./../node_modules/bulma/css/bulma.css";
import { FBApp, FBUIApp } from "@/helpers/firebaseConfig";

Vue.config.productionTip = false;
Vue.use(VueFire);

let app = "";
FBApp.auth().onAuthStateChanged(user => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      store,
      beforeCreate() {
        store.dispatch("user/init", { FBApp, FBUIApp });
      },
      created() {
        if (user) {
          store.dispatch("user/login", user);
          this.$router.push("/vote");
        } else {
          this.$router.push("/login");
        }
      },
      render: h => h(App)
    }).$mount("#app");
  }
});
