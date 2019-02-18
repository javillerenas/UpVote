/* eslint-disable */
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
    login(context, user) {
      context.commit("SET_USER", user);
    },
    vote(context, { projectId }) {
      return projectId
    }
  }
};
