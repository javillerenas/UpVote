import { FIREBASE_APP, FIREBASE_PROJECTLIST } from "@/helpers/sources";

/**
 *  @Project: {
 *      icon: null,
 *      name: [],
 *      description: null,
 *      author: null,
 *      votes: 0
 *  }
 */
import seed from "@/seed.json";

export default {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    SET_LIST(state, list) {
      state.list = list;
    }
  },
  getters: {
    listProjects: state => state.list
  },
  actions: {
    getAllProjects(context) {
      /*
            return fetch(`${FIREBASE_APP}/${FIREBASE_PROJECTLIST}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            })
            .then(res => { return res.json() })
            .then((projects) => {
            context.commit('SET_LIST', projects)
            })
            .catch(error => { return error })*/
      context.commit("SET_LIST", seed.posts);
    }
  }
};
