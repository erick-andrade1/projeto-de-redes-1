import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("../views/HomeView.vue");
const Login = () => import("../views/Login.vue");

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
