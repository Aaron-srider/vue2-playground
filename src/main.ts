import Vue from "vue";
import App from "@/App.vue";
import router from "@/router/index";
import "./js/GlobalRouteGuard";

import store from "@/store/index";

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
