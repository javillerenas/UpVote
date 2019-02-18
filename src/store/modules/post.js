/* eslint-disable */
import { FBFirestore } from '@/helpers/firebaseConfig'

export default {
  namespaced: true,
  state: {
    list: {}
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
    getList(context) {
      return FBFirestore.collection('projects')
        .get()
        .then(snapshot => {
          const posts = {}
          snapshot.forEach(doc => {
            posts[doc.id] = Object.assign({}, { id: doc.id }, doc.data())
          })
          context.commit("SET_LIST", posts);
      })
    },
    getPost(context, { id }) {
      console.log(id)
      /*
      return FBFirestore.collection('projects')
      .where('id', '===', id)
      .get()
      .then(snapshot => {
        const posts = []
        snapshot.forEach(doc => {
          posts.push(doc.data())
        })
        return posts
      })
      */
    }
  }
};
