<!--  -->
<template>
  <div class="flex">
    <el-input v-model="inputtext" @input="inputChange"></el-input>
    <el-button>search</el-button>
  </div>
</template>

<script>
import EventBus from "@/js/Event/EventBus";
export default {
  name: "search-comp",
  data() {
    return { inputtext: "" };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  methods: {
    inputChange() {
      EventBus.$emit("search-hit", this.inputtext);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/style/common-style.scss";
</style>
