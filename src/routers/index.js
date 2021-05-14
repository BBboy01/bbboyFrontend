import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("../views/Home"); // 懒加载
const NoteInfo = () => import("../views/NoteInfo");
const BackStage = () => import("../views/BackStage");

const routes = [
  {
    path: "",
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
