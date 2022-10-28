<template>
  <!-- <div
    style="
        border:2px dotted red;
        height: calc(100% - 38px);
        height: 400px;
        padding: 0px 0 0;
        margin: 0 12px;
        max-width: 96%;
      "
  >
    <ag-grid-vue
      style="height:100%;"
      :columnDefs="columnDefs.value"
      :rowData="rowData.value"
      class="ag-theme-balham"
  ></ag-grid-vue>-->
  <!-- <ag-grid-vue
        id="grid"
        class="ag-theme-balham"
        ref="grid"
        :default-col-def="defaultColDef"
        :column-defs="columnDefs"
        :grid-options="gridOptions"
        :enable-range-selection="true"
        :suppress-multi-range-selection="true"
        :overlay-no-rows-template="overlayNoRowsTemplate"
        :row-selection="rowSelection"
        style="height:100%;"
        @grid-ready="onGridReady"
        row-model-type="infinite"
        cache-overflow-size="2"
        max-concurrent-datasource-requests="1"
        infinite-initial-row-count="150"
        max-blocks-in-cache="10"
  ></ag-grid-vue>-->
  <!-- </div> -->

  <div style="height:calc(100% - 50px)">
    <ag-grid-vue
      style="height:100%;"
      :columnDefs="columnDefs.value"
      :rowData="rowData.value"
      class="ag-theme-balham"
    ></ag-grid-vue>
  </div>
</template>

<script>
import { reactive, computed, onMounted, getCurrentInstance } from "vue";
import axios from "axios";
export default {
  components: {
    "ag-grid-vue": (window["ag-grid-vue3"] || {}).AgGridVue
  },
  setup(props) {
    const { proxy } = getCurrentInstance();
    const rowData = reactive({});
    const columnDefs = reactive({
      value: [
        { headerName: "Row ID", field: "id" },
        { field: "make" },
        { field: "model" },
        { field: "price" }
      ]
    });
    onMounted(() => {
      axios
        .post("/api/model/demo")
        .then(res => {
          proxy.$q.notify({
            message: "success",
            color: "orange"
          });
          rowData.value = res.data;
        })
        .catch(err => {
          try {
            proxy.$q.notify({
              message: err.message,
              color: "red"
            });
          } catch (error) {
            proxy.$q.notify({
              message: error,
              color: "red"
            });
          }
          rowData.value = [];
        });
    });
    return {
      rowData,
      columnDefs
    };
  },
  data() {
    return {};
  },
  methods: {
    mockData() {}
  },
  created() {
    console.dir(window["ag-grid-vue3"]);
  },
  mounted() {}
};
</script>

<style scoped>
</style>
