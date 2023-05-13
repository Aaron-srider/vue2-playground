<!--  -->
<template>
  <div class="">
    <el-input
      id="consoleout"
      type="textarea"
      :rows="10"
      :value="textArr.join('\n')"
      :autosize="{ minRows: 10, maxRows: 10 }"
      readonly
    ></el-input>
  </div>
</template>

<script>
import EventBus from "@/js/Event/EventBus";
function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function formatDate(date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-") +
    " " +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(":")
  );
}

export default {
  components: {},
  data() {
    return {
      textArr: [],
    };
  },
  computed: {},
  watch: {
    textArr: {
      handler: function (val, oldVal) {
        this.$nextTick(() => {
          document.getElementById("consoleout").scrollTop =
            document.getElementById("consoleout").scrollHeight;
        });
      },
      deep: true,
    },
  },
  created() {
    EventBus.$on("console-log", (args) => {
      if (args && args.length != 0) {
        // only get the first argument of console log and push to array
        let args0 = args[0];
        if (Object.prototype.toString.call(args0) === "[object String]") {
          this.textArr.push(`${formatDate(new Date())} ${args0}`);
        }
      }
    });
    console.log("console log debug textarea prepared");
  },
  mounted() {
    console.log(this.$refs.scrollbar);
  },
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
<style lang="scss" scoped></style>
