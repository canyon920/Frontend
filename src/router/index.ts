import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GameView from "../views/GameView.vue";
import LoginView from "../views/Login/LoginView.vue";
import TestView from "../views/TestView.vue";
import GamePage from "../views/GamePage.vue";
import ContextComponent from "../views/ContextComponent.vue";
import WebBook from "../views/WebBook.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/second",
    name: "GameView",
    component: GameView,
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/test",
    name: "TestView",
    component: TestView,
  },
  {
    path: "/slot",
    name: "GamePage",
    component: GamePage,
  },
  {
    path: "/game",
    name: "GameView",
    component: GameView,
  },
  {
    path: "/context",
    name: "ContextComponent",
    component: ContextComponent,
  },
  {
    path: "/webBook",
    name: "WebBook",
    component: WebBook,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (""About"".[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "About" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
