<!--  -->
<template>
  <div class="sidebar">
    <el-menu style="height: 100%">
      <render-routes
        :routesForSideBar="routesForSideBar"
        :parentPath="``"
        :parentIndex="``"
      ></render-routes>
    </el-menu>
  </div>
</template>

<script>
import RoutesForSideBar from "@/js/SideBar/RoutesForSideBar";
import RenderRoutes from "@/components/RenderRoutes.vue";
export default {
  components: { RenderRoutes },
  data() {
    return {
      routesForSideBar: [],
    };
  },
  computed: {},
  watch: {},
  created() {
    this.routesForSideBar = RoutesForSideBar.getRoutesForSideBar();
    console.log(this.routesForSideBar);
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
@import "~@/style/common-style.scss";
</style>
