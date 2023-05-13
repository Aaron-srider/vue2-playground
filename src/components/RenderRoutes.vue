<!--  -->
<template>
  <div class="sidebar">
    <!-- iterate each route -->
    <div v-for="(route, index) in routesForSideBar" :key="route.path">
      <div v-if="leafMenu(route)">
        <!-- leaf route -->
        <router-link :to="concatPath(parentPath, route.path)">
          <el-menu-item :index="concatIndex(parentIndex, index + 1)">
            <i :class="route.meta ? route.meta.icon : ``"></i>
            <span>{{ route.meta ? route.meta.menuName : "" }}</span>
          </el-menu-item>
        </router-link>
      </div>
      <!-- render the sub menu of the route -->
      <div v-else>
        <el-submenu :index="concatIndex(parentIndex, index + 1)">
          <template slot="title">
            <i :class="route.meta ? route.meta.icon : ``"></i>
            <span>{{ route.meta ? route.meta.menuName : "" }}</span>
          </template>
          <render-routes
            :routesForSideBar="route.children"
            :parentPath="concatPath(parentPath, route.path)"
            :parentIndex="concatIndex(parentIndex, index + 1)"
          ></render-routes>
        </el-submenu>
      </div>
    </div>
  </div>
</template>

<script>
import RenderRoutes from "@/components/RenderRoutes.vue";
export default {
  name: "RenderRoutes",
  components: { RenderRoutes },
  data() {
    return {};
  },
  props: {
    routesForSideBar: {
      type: Array,
      default: () => {
        return [];
      },
      required: true,
    },
    parentPath: {
      type: String,
      required: true,
    },
    parentIndex: {
      type: String,
      required: true,
    },
  },
  computed: {},
  watch: {},
  created() {
    this.routesForSideBar.forEach((route) =>
      console.log(`render routes to menu: ${route.path}`)
    );
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  methods: {
    concatPath(parent, sub) {
      if (sub.startsWith("/")) {
        return `${parent}${sub}`;
      }

      return `${parent}/${sub}`;
    },
    concatIndex(parent, sub) {
      if (parent == "") {
        return `${sub}`;
      }

      return `${parent}-${sub}`;
    },
    leafMenu(route) {
      // if the route does not have a child, of course, it is a leaf
      if (route.children == undefined || route.children.length == 0) {
        return true;
      }

      // if the route has at least one child, and the path of the first child is empty "", we treat it as a leaf
      if (route.children[0].path == "") {
        return true;
      }

      return;
    },
  },
};
</script>
<style lang="scss" scoped>
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
</style>
