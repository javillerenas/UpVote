/* eslint-disable */
import { FBFirestore } from '@/helpers/firebaseConfig'

export default {
  namespaced: true,
  state: {
    user: null,
    currentVote: null,
    FBApp: null,
    FBUIApp: null,
    session_started: new Date()
  },
  mutations: {
    SET_FBAPP(state, fbData) {
      state.FBApp = fbData.FBApp;
    },
    SET_FBUIAPP(state, FBUIApp) {
      state.FBUIApp = FBUIApp;
    },
    SET_USER(state, user) {
      state.user = user;
      state.userAuthenticated = true;
    },
    SET_VOTE(state, projectId) {
      state.currentVote = projectId;
    }
  },
  getters: {
    getFBUiApp: state => state.FBUIApp,
    getUser: state => state.user,
    isValidUser: state =>
      state.user ? state.user.email.includes("@mulesoft.com") : false
  },
  actions: {
    init(context, fbData) {
      context.commit("SET_FBAPP", fbData.FBApp);
      context.commit("SET_FBUIAPP", fbData.FBUIApp);
    },
    getCurrentVote(context) {
      let { uid } = context.state.user
      FBFirestore.collection('votes')
        .doc(uid).get()
        .then(snapshot => {
          let { id } = snapshot.data()
          context.commit("SET_VOTE", id);
        })
    },
    login(context, user) {
      context.commit("SET_USER", user);
      context.dispatch("getCurrentVote");
    },
    vote(context, { id }) {
      let { uid } = context.state.user
      FBFirestore.collection('votes').doc(uid).set({ id }).then( () => {
        context.commit("SET_VOTE", id);
      })
    }
  }
};
