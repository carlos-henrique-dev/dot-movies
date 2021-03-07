import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Checkout from "../views/Checkout";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
