<!--  -->
<template>
  <div class="">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180"> </el-table-column>
      <el-table-column prop="name" label="Name" width="180"> </el-table-column>
      <el-table-column prop="address" label="Address"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import EventBus from "@/js/Event/EventBus";
export default {
  name: "table-comp",
  components: {},
  data() {
    return {
      tableData: [],
      source: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "Jane",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Timi",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Marry",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
    };
  },
  computed: {},
  watch: {},
  created() {
    this.tableData = this.tableData.concat(this.source);
    EventBus.$on("search-hit", (searchtext) => {
      var name = searchtext;
      if (name === "") {
        this.tableData = this.tableData.concat(this.source);
        return;
      }
      // find all name in the source
      var result = this.source.filter((item) => {
        return item.name.startsWith(name);
      });
      this.tableData = [];
      this.tableData = this.tableData.concat(result);
    });
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
