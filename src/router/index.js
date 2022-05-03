import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/",
    name: "DefaultLayout",
    component: () => import("@/layouts/default/index.vue"),
    redirect: "/mainview",
    children: [
      {
        path: "/mainview",
        name: "MainView",
        component: () => import("@/views/MainView.vue"),
      },
      {
        path: "/purchaselist",
        name: "PurchaseList",
        component: () => import("@/views/PurchaseList.vue"),
      },
      {
        path: "/purchaselistopt",
        name: "PurchaseListOpt",
        component: () => import("@/views/PurchaseListOpt.vue"),
      },
      {
        path: "/purchaseview",
        name: "PurchaseView",
        component: () => import("@/views/PurchaseView.vue"),
      },
      {
        path: "/purchaseview2",
        name: "PurchaseView2",
        component: () => import("@/views/PurchaseView2.vue"),
      },
      {
        path: "/salegrouplist",
        name: "SaleGroupList",
        component: () => import("@/views/SaleGroupList.vue"),
      },
    ],
  },
  {
    path: "/loading",
    name: "LoadingLayout",
    component: () => import("@/layouts/load/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
