declare module "@/store/index" {
  import VueRouter, { RouteConfig } from "vue-router";
  import Vuex from "vuex";

  const store: Vuex.Store;

  export default store;
}
