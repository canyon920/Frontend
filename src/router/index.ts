import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GameView from "../views/GameView.vue";
import LoginView from "../views/Login/LoginView.vue";
import TestView from "../views/TestView.vue";
import GamePage from "../views/GamePage.vue";
import RightCompo from "../views/RightCompo.vue";
import WebBook from "../views/WebBook.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
   checter: "" },
  {
    path: "/second",
    name: "GameView",
    component: GameView,
   checter: "" },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
   checter: "" },
  {
    path: "/test",
    name: "TestView",
    component: TestView,
   checter: "" },
  {
    path: "/slot",
    name: "GamePage",
    component: GamePage,
   checter: "" },
  {
    path: "/game",
    name: "GameView",
    component: GameView,
   checter: "" },
  {
    path: "/rightCompo",
    name: "RightCompo",
    component: RightCompo,
   checter: "" },
  {
    path: "/webBook",
    name: "WebBook",
    component: WebBook,
   checter: "" },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (""About"".[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "About" */ "../views/AboutView.vue"),
   checter: "" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
