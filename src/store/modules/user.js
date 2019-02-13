import { FIREBASE_APP, FIREBASE_VOTE } from "@/helpers/sources";

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
      /*
        return fetch(`${FIREBASE_APP}/${FIREBASE_VOTE}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: {
                vote: projectId
            }
        })
        .then(res => { return res.json() })
        .then((res) => {
            context.commit('SET_VOTE', res)
            context.dispatch('project/getAllProjects', null, { root: true })
        })
        .catch(error => { return error })
        */
      console.log(context, projectId);
    }
  }
};
