import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/vue-cli-init-pages",
    meta: {
      pageTitle: "StartPoint",
      menuName: "StartPoint",
      icon: "el-icon-s-flag",
    },
    component: () => import("@/components/Layout.vue"),
    children: [
      {
        path: "home",
        meta: { pageTitle: "Home", menuName: "Home", icon: "el-icon-s-home" },
        component: () => import("../views/HomeView.vue"),
      },
      {
        path: "about",
        meta: { pageTitle: "About", menuName: "About", icon: "el-icon-info" },
        component: () => import("../views/AboutView.vue"),
      },
    ],
  },
  {
    path: "/eventbus",
    meta: {
      pageTitle: "EventBusPlayGround",
      menuName: "EventBusPlayGround",
      icon: "el-icon-bicycle",
    },
    component: () => import("@/components/Layout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("@/views/eventBusPlayGound/EventBusPlayGround.vue"),
      },
    ],
  },

  {
    path: "/test",
    meta: {
      pageTitle: "TestPage",
      menuName: "TestPage",
      icon: "el-icon-timer",
    },
    component: () => import("@/components/Layout.vue"),
    children: [
      {
        path: "testts",
        meta: {
          pageTitle: "testts",
          menuName: "testts",
        },
        component: () => import("@/views/Testts.vue"),
      },
      {
        path: "test_ConsoleLogTextArea",
        meta: {
          pageTitle: "ConsoleLogTextArea",
          menuName: "ConsoleLogTextArea",
        },
        component: () => import("@/components/DebugTextArea/TestPage.vue"),
      },
      {
        path: "apage",
        meta: {
          pageTitle: "APage",
          menuName: "APage",
        },
        component: () => import("@/views/ATestPage.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export { routes };

export default router;
