<!--  -->
<template>
  <div>
    <app-main-layout>
      <template #content>
        <search />
        <itemlist />
      </template>
    </app-main-layout>
  </div>
</template>

<script>
import AppMainLayout from "@/components/AppMainLayout.vue";
import search from "./Search.vue";
import itemlist from "./Table.vue";
export default {
  components: {
    search,
    itemlist,
    AppMainLayout,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  beforeRouteEnter(to, from, next) {
    console.log(`enter ${to.path}`);
    next();
  },
  created() {},
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
