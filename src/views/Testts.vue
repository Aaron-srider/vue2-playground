<template>
  <div class="">{{ getMessage(1) }}</div>
</template>

<script lang="ts">
import Vue, { defineComponent } from "vue";

export default Vue.extend({
  components: {},
  data() {
    return {};
  },
  methods: {
    getMessage(i: number): string {
      return `${i} hello world`;
    },
  },
});
</script>

<style lang="scss" scoped></style>
