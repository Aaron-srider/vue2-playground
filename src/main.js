import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import GlobalRouteGuard from "./js/GlobalRouteGuard";

import store from "./store";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import DebugTextArea from "@/components/DebugTextArea/DebugTextArea";

new DebugTextArea();

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
