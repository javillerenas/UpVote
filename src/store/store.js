import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
  },
  state: {
    user: null,
    userAuthenticated: false,
    fbApp: null,
    fbUiApp: null,
  },
  getters: {
    user: state => state.user,
    userAuthenticated: state => state.userAuthenticated,
    fbApp: state => state.fbApp,
    fbUiApp: state => state.fbUiApp
  },
  mutations: {
    /* eslint-disable no-param-reassign */
    SET_USER(state, user) {
      state.user = user
    },
    SET_USER_AUTHENTICATED(state, isAuthenticated) {
      state.userAuthenticated = isAuthenticated
    },
    SET_FB_APP(state, fbApp) {
      state.fbApp = fbApp
    },
    SET_FB_UI_APP(state, fbUiApp) {
      state.fbUiApp = fbUiApp
    }
  }
})

export default store
