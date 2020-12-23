import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: () => import("@/components/Login.vue"),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: "/Home",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: "/About",
    name: "About",
    component: () => import("@/views/About.vue"),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: "/500",
    name: "serverError",
    component: () => import("@/components/serverError.vue"),
  },
  {
    path: "/403",
    name: "notPermission",
    component: () => import("@/components/notPermission.vue"),
  },
  {
    path: "/404",
    name: "notFound",
    component: () => import("@/components/NoFind.vue"),
  },
  {
    path: "/:pathMatch(.*)*", // 此处需特别注意置于最底部
    redirect: "/404",
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
