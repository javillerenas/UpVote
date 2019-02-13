import PostService from '@/services/PostService.js'

export const namespaced = true

export const state = {
  posts: [],
  postsTotal: 0,
  post: {}
}

export const mutations = {
  ADD_POST(state, post) {
    state.posts.push(post)
  },
  SET_POST(state, post) {
    state.post = post
  },
  SET_POSTS(state, posts) {
    state.posts = posts
  },
  SET_POSTS_TOTAL(state, postsTotal) {
    state.postsTotal = postsTotal
  }
}

export const actions = {
  fetchPosts({ commit, dispatch, state }, { page }) {
    return PostService.posts(state.perPage, page)
      .then(posts => {
        commit('SET_POSTS', posts)
        commit('SET_POSTS_TOTAL', posts.length)
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem creating your event: ' + error.message
        }
        dispatch('notification/add', notification, { root: true })
        throw error
      })
  },
  fetchPost({ commit, getters, dispatch, state }, id) {
    if (id == state.post.id) {
      return state.post
    }
    let post = getters.getPostById(id)
    if (post) {
      commit('SET_POST', post)
      return post
    } else {
      return PostService.post(id)
        .then(response => {
          commit('SET_POST', response.data)
          return response.data
        })
        .catch(error => {
          const notification = {
            type: 'error',
            message: 'There was a problem fetching post: ' + error.message
          }
          dispatch('notification/add', notification, { root: true })
        })
    }
  }
}

export const getters = {
  getPostById: state => id => {
    return state.posts.find(post => post.id === id)
  }
}
