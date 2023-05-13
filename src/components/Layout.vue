<template>
  <div id="app">
    <!-- this is the left side of the page, only contain a sidebar -->
    <side-bar-from-route></side-bar-from-route>
    <!-- this is the right side of the page, you may put a top nav(not necessary), with the main area of the page down below   -->
    <div class="main-container with-console-log-textarea">
      <router-view style="flex: 1" />
      <console-log-text-area></console-log-text-area>
    </div>
  </div>
</template>

<script>
import ConsoleLogTextArea from "@/components/DebugTextArea/ConsoleLogTextArea.vue";
import SideBarFromRoute from "@/components/SideBarFromRoute.vue";
export default {
  name: "global-layout",
  components: {
    SideBarFromRoute,
    ConsoleLogTextArea,
  },
};
</script>
<style lang="scss" scoped>
@import "~@/style/common-style.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

  height: 100vh;
  width: 100%;
  display: flex;
}

.with-console-log-textarea {
  display: flex;
  flex-direction: column;
}

.sidebar {
  width: 250px;

  a {
    // font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    // &.router-link-exact-active {
    //   color: #42b983;
    // }
  }
}

.main-container {
  text-align: center;
  flex: 1;
}

nav {
  padding: 30px;

  // a {
  //   font-weight: bold;
  //   color: #2c3e50;

  //   &.router-link-exact-active {
  //     color: #42b983;
  //   }
  // }
}
</style>
