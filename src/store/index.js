import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
// Modules
import user from "./modules/user";
import post from "./modules/post";

// Initialize
Vue.use(Vuex);
const vuexPersist = new VuexPersist({
  key: "HackAVote",
  storage: localStorage
});

const store = new Vuex.Store({
  modules: {
    user,
    post
  },
  state: {},
  mutations: {
    INCREMENT: state => {
      state.count++;
    },
    DECREMENT: state => {
      state.count--;
    }
  },
  actions: {},
  plugins: [vuexPersist.plugin]
});

export default store;
