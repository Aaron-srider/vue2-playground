<!--  -->
<template>
  <div>
    <page-header>
      <slot name="header">
        <span style="font-size: 24px; font-weight: bold">This is header</span>
      </slot>
    </page-header>
    <page-content>
      <slot name="content">
        <div style="height: 400px; background-color:cadetblue">
          <span style="font-size: 24px; font-weight: bold"
            >This is content</span
          >
        </div>
      </slot></page-content
    >
    <page-footer>
      <slot name="footer">
        <div style="height: 100px; background-color:bisque">
          <span style="font-size: 24px; font-weight: bold">This is footer</span>
        </div>
      </slot>
    </page-footer>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import PageContent from "@/components/PageContent.vue";
import PageFooter from "@/components/PageFooter.vue";
export default {
  components: { PageHeader, PageContent, PageFooter },
  data() {
    return {};
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
  methods: {},
};
</script>
<style lang="scss" scoped>
@import "~@/style/common-style.scss";
</style>
