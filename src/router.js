import Vue from "vue";
import Router from "vue-router";
import store from "@/store";

Vue.use(Router);

function loadView(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", name: "Login", component: loadView("Login") },
    {
      path: "/vote",
      name: "Vote",
      component: loadView("UpVote"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "*",
      name: "NotFound",
      component: loadView("NotFound")
    }
  ]
});

router.beforeEach((to, from, next) => {
  const isValidUser = store.getters["user/isValidUser"];
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !isValidUser) next("login");
  else next();
});

export default router;
