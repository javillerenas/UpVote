import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store/store'
import VueFire from 'vuefire'
import './../node_modules/bulma/css/bulma.css';
import { FBApp, FBUIApp } from '@/helpers/firebaseConfig'

store.commit('SET_FB_APP', FBApp)
store.commit('SET_FB_UI_APP', FBUIApp)

Vue.config.productionTip = false
Vue.use(VueFire)

let app = ''
FBApp.auth().onAuthStateChanged(user => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      store,
      created() {
        if (user) {
          store.commit('SET_USER_AUTHENTICATED', true)
          store.commit('SET_USER', user)
          this.$router.push('/vote')
        } else {
          store.commit('SET_USER_AUTHENTICATED', false)
          this.$router.push('/login')
        }
      },
      render: h => h(App)
    }).$mount('#app')
  }
})
