import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/Home"); // 懒加载
const NoteInfo = () => import("../views/NoteInfo");
const BackStage = () => import("../views/BackStage");
const NotFound = () => import("../views/404");

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "DefaultHome",
    component: Home,
  },
  {
    path: "/note/:id",
    name: "NoteContent",
    component: NoteInfo,
  },
  {
    path: "/back-stage",
    name: "BackStage",
    component: BackStage,
  },
  {
    path: "/404",
    component: NotFound,
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
