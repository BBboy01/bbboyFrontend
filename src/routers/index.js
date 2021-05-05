import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("../views/Home"); // 懒加载

const routes = [
  {
    path: "",
    name: "DefaultHome",
    component: Home,
    meta: {
      title: "图书兄弟",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
