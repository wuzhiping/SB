<template>
  <div class="fullscreen text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 12vh">404</div>

      <div class="text-h5 myClass" style="opacity: 0.4">Oops. Nothing here...</div>
      <cdd>init</cdd>
      <hr/>
      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="primary"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
    <hr/>
    <ag-grid-vue
        :columnDefs="columnDefs"
        :rowData="rowData"
        style="height:200px;width:100%;border:2px dotted red;"
        class="ag-theme-balham"
      ></ag-grid-vue>
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
      ></ag-grid-vue> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import cdd from "./CDD.vue"
import "./CSS.css"


export default {
  name: "demo-index",

  components: { 
                cdd ,
                // "ag-grid-vue": (window["ag-grid-vue3"]||{}).AgGridVue 
                "ag-grid-vue":  (window["ag-grid-vue3"]||{}).AgGridVue 
              },

  data() {
    return {
      columnDefs: [
        { field: "abstractinfo" },
        { field: "currentbalance" },
        { field: "payeeacctname",width:400 }
        
      ],
      rowData: []
    };
  },
  
  created() {
    console.dir(window["ag-grid-vue3"]);
  }

};
</script>

<style scoped></style>
