import Vue from "vue";
import VueRouter from "vue-router";
import Page from "../views/Main";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Page
  }
];

const router = new VueRouter({
  routes
});

export default router;
