import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("../views/Home"); // 懒加载
const NoteInfo = () => import("../views/NoteInfo");

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
