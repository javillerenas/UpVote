import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'

Vue.use(Router)

function loadView(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: loadView('Login')
    },
    {
      path: '/vote',
      name: 'Vote',
      component: loadView('UpVote'),
      meta: {
        requiresAuth: true
      },
      beforeEnter(routeTo, routeFrom, next) {
        const currentPage = parseInt(routeTo.query.page) || 1
        const uris = ['post/fetchPosts']
        Promise.all(
          uris.map(uri =>
            store.dispatch(uri, {
              page: currentPage
            })
          )
        ).then(() => {
          routeTo.params.page = currentPage
          next()
        })
      }
    },
    {
      path: '*',
      name: 'NotFound',
      component: loadView('NotFound')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = store.getters.userAuthenticated
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('home')
  else next()
})

export default router
