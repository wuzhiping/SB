<template>
  <div style="height:100%">
    <div class="q-pa-md bg-blue-grey-1">
      <div
        class="row bg-indigo-2"
        style="padding:4px;border:1px solid #ddd; margin:-16px -18px 12px!important;"
      >
        <div class="col">
          <q-btn color="indigo-4" text-color="white" label="Send By Email" size="sm"></q-btn>
          <q-btn color="indigo-4" text-color="white" label="Print RFQ" size="sm"></q-btn>
          <q-btn color="white" text-color="dark" label="Confirm Order" size="sm" @click="submit"></q-btn>
          <q-btn color="white" text-color="dark" label="Cancel" size="sm"></q-btn>
        </div>
        <div class="col abc" style="x-text-align:right;margin-top:8px;">
          <q-breadcrumbs class="text-grey" active-color="orange" gutter="none" align="right">
            <template v-slot:separator>
              <q-icon size="1.2em" name="arrow_forward" color="white" />
            </template>
            <q-breadcrumbs-el label="RFQ"></q-breadcrumbs-el>
            <q-breadcrumbs-el label="RFQ Send"></q-breadcrumbs-el>
            <q-breadcrumbs-el label="Purchase Order"></q-breadcrumbs-el>
          </q-breadcrumbs>
        </div>
      </div>

      <div class="q-gutter-y-md column" style="x-max-width: 300px">
        <!--q-toggle v-model="dense" label="Dense QInput"></q-toggle-->
        <q-card style="box-shadow:none;background:transparent;">
          <q-card-section style="border-bottom:1px solid #ddd;padding-bottom:2px;padding-top:2px;">
            <div class="text-h6">Request for Quotation</div>
            <div class="text-subtitle2">P00001</div>
          </q-card-section>

          <q-card-section>
            <q-form ref="myForm" class="q-gutter-xs">
              <div class="row abc q-col-gutter-xs">
                <div class="col">
                  <q-input
                    type="time"
                    square
                    outlined
                    v-model="text"
                    label="Label"
                    maxlength="12"
                    :dense="dense"
                    input-class="text-right"
                  ></q-input>
                </div>
                <div class="col">
                  <q-input
                    type="time"
                    filled
                    v-model="text"
                    label="Label"
                    maxlength="12"
                    :dense="dense"
                    input-class="text-right"
                  ></q-input>
                </div>
                <div class="col">
                  <q-input
                    stack-label
                    type="date"
                    filled
                    v-model="text"
                    label="Label"
                    maxlength="12"
                    :dense="dense"
                    input-class="text-right"
                    lazy-rules
                    :rules="[ val => val && val.length > 1 || 'Please type something more then 1']"
                  ></q-input>
                </div>
              </div>
              <div class="row abc q-col-gutter-xs">
                <div class="col">
                  <q-input
                    type="time"
                    filled
                    v-model="text"
                    label="Label"
                    maxlength="12"
                    :dense="dense"
                    input-class="text-right"
                  ></q-input>
                </div>
                <div class="col">
                  <q-input
                    class="color-black;"
                    standout="bg-blue-grey-2 text-red-4"
                    v-model="text"
                    label="Label"
                    maxlength="12"
                    :dense="dense"
                    hint="with rule"
                    lazy-rules
                    :rules="[ val => val && val.length > 10 || 'Please type something more then 10']"
                  ></q-input>
                </div>
                <div class="col">
                  <q-input
                    v-model="text"
                    filled
                    label="Label"
                    label-color="orange"
                    maxlength="12"
                    :dense="dense"
                  >
                    <template v-slot:before>
                      <q-icon name="event" />
                    </template>
                    <template v-slot:append>
                      <q-btn round dense flat icon="add" />
                    </template>
                  </q-input>
                </div>
              </div>
              <div class="row abc q-col-gutter-xs">
                <div class="col-md-4 offset-md-4">
                  <q-input
                    type="time"
                    filled
                    v-model="text"
                    label="Label"
                    maxlength="12"
                    :dense="dense"
                    input-class="text-right"
                  ></q-input>
                </div>
                <div class="col-md-4">
                  <q-input
                    stack-label
                    type="date"
                    filled
                    v-model="text"
                    label="Label"
                    maxlength="12"
                    :dense="dense"
                    input-class="text-right"
                    lazy-rules
                    :rules="[ val => val && val.length > 1 || 'Please type something more then 1']"
                  ></q-input>
                </div>
              </div>
              <div class="row abc q-col-gutter-xs">
                <div class="col">
                  <q-select
                    :dense="dense"
                    filled
                    input-debounce="0"
                    label="IT Company Lists"
                    :options="['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']"
                    behavior="dialog"
                  >
                    <template v-slot:no-option>
                      <q-item>
                        <q-item-section class="text-grey">No results</q-item-section>
                      </q-item>
                    </template>
                  </q-select>
                </div>
                <div class="col">
                  <q-select
                    filled
                    :dense="dense"
                    v-model="modelSingle"
                    :options="['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']"
                    stack-label
                    label="Single selection"
                  ></q-select>
                </div>
                <div class="col">
                  <q-select
                    filled
                    :dense="dense"
                    v-model="modelMultiple"
                    multiple
                    :options="['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']"
                    stack-label
                    max-values="2"
                    label="Multiple selection"
                  ></q-select>
                </div>
              </div>
              <div class="row abc q-col-gutter-xs">
                <div class="col">
                  <q-input
                    style="min-height:50px;"
                    filled
                    v-model="text"
                    type="textarea"
                    rows="3"
                    label="Remark"
                    autogrow
                    :dense="dense"
                    counter
                  ></q-input>
                </div>
              </div>
            </q-form>
           
          </q-card-section>

          <q-card-section style="box-shadow:none;background:transparent;padding:0 18px 8px;">
            <q-tabs
              v-model="tab"
              dense
              align="left"
              class="bg-blue-grey-2 text-black-2 shadow-2"
              :breakpoint="0"
            >
              <q-tab name="items" label="items"></q-tab>
              <q-tab name="vendors" label="vendors"></q-tab>
            </q-tabs>
            <q-tab-panels
              v-model="tab"
              animated
              class="text-black-2"
              style="background:transparent;zoom:110%;"
            >
              <q-tab-panel name="items" style="padding:0;">
                <q-table
                  style="background:transparent;"
                  dense
                  :data="data"
                  :columns="columns"
                  row-key="name"
                  hide-bottom
                  separator="cell"
                  binary-state-sort
                >
                  <template v-slot:body="props">
                    <q-tr :props="props">
                      <q-td key="desc" :props="props">
                        {{ props.row.name }}
                        <q-popup-edit v-model="props.row.name">
                          <q-input v-model="props.row.name" dense autofocus counter />
                        </q-popup-edit>
                      </q-td>
                      <q-td key="calories" :props="props">
                        {{ props.row.calories }}
                        <q-popup-edit v-model="props.row.calories" title="Update calories" buttons>
                          <q-input type="number" v-model="props.row.calories" dense autofocus />
                        </q-popup-edit>
                      </q-td>
                      <q-td key="fat" :props="props">
                        <div class="text-pre-wrap">{{ props.row.fat }}</div>
                        <q-popup-edit v-model="props.row.fat">
                          <q-input type="textarea" v-model="props.row.fat" dense autofocus />
                        </q-popup-edit>
                      </q-td>
                      <q-td key="carbs" :props="props">
                        {{ props.row.carbs }}
                        <q-popup-edit
                          v-model="props.row.carbs"
                          title="Update carbs"
                          buttons
                          persistent
                        >
                          <q-input
                            type="number"
                            v-model="props.row.carbs"
                            dense
                            autofocus
                            hint="Use buttons to close"
                          />
                        </q-popup-edit>
                      </q-td>
                      <q-td key="protein" :props="props">{{ props.row.protein }}</q-td>
                      <q-td key="sodium" :props="props">{{ props.row.sodium }}</q-td>
                      <q-td key="calcium" :props="props">{{ props.row.calcium }}</q-td>
                      <q-td key="iron" :props="props">{{ props.row.iron }}</q-td>
                    </q-tr>
                  </template>
                </q-table>
              </q-tab-panel>

              <q-tab-panel name="vendors" style="padding:0;">
               
              </q-tab-panel>
            </q-tab-panels>
          </q-card-section>
          <q-card-section
            style="
            height: 250px;
            margin: 0 2px 12px;
          "
          >
            <ag-grid-vue
              id="grid"
              style="height:100%;width:100%;zoom:110%;"
              class="ag-theme-balham"
              ref="grid"
              :row-data="rowData"
              :grid-options="gridOptions"
              :enable-range-selection="true"
              :suppress-multi-range-selection="true"
              :column-defs="columnDefs"
            ></ag-grid-vue>
          </q-card-section>
          <q-card-section style="box-shadow:none;background:transparent;padding:8px 18px 18px;">
            <q-editor
              v-model="text"
              flat
              content-class="bg-grey-2"
              toolbar-text-color="black"
              toolbar-toggle-color="bg-grey-1"
              toolbar-bg="blue-grey-2"
              :toolbar="[
            ['bold', 'italic', 'strike', 'underline']
          ]"
            ></q-editor>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: {
    viewId: { type: String, required: true },
    item: { type: Object, required: true },
    instanceData: { type: Object, required: true },
    taskData: { type: Object, required: true }
  },
  components: {},
  watch: {
    "$i18n.locale"(curVal, oldVal) {
      this.args.change = oldVal + "->" + curVal;
    }
  },
  data() {
    return {
      modelSingle: "Apple",
      modelMultiple: ["Facebook"],

      text: "",
      ph: "",
      dense: true,

      gridOptions: {},
      rowData: [],
      columnDefs: [
        {
          headerName: "time",
          field: "stamp",
          width: 140,
          pinned: "left"
        },
        {
          headerName: "Error",
          field: "error",
          pinned: "left",
          width: 100
        },
        {
          headerName: "ItemCode",
          field: "data.ItemCode",
          pinned: "left",
          width: 120
        },
        {
          headerName: "ErrorInfo",
          field: "errorInfo",
          width: 400
        }
      ],

      tab: "items",

      columns: [
        {
          name: "desc",
          required: true,
          label: "Dessert (100g serving)",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "calories",
          align: "center",
          label: "Calories",
          field: "calories",
          sortable: true
        },
        {
          name: "fat",
          label: "Fat (g)",
          field: "fat",
          sortable: true,
          style: "width: 10px"
        },
        { name: "carbs", label: "Carbs (g)", field: "carbs" },
        { name: "protein", label: "Protein (g)", field: "protein" },
        { name: "sodium", label: "Sodium (mg)", field: "sodium" },
        {
          name: "calcium",
          label: "Calcium (%)",
          field: "calcium",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        },
        {
          name: "iron",
          label: "Iron (%)",
          field: "iron",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        }
      ],
      data: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: "14%",
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: "8%",
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: "6%",
          iron: "7%"
        }
      ]
    };
  },
  methods: {
    async isValid(action) {
      console.log("isValid...");
      //
      (async () => {
        //
        //
      })(); //END async

      var result = false;
      await this.$refs.myForm.validate().then(success => {
        result = success ? true : false;
      });
      return result;
      // return true;
      //       return new Promise(function(resolve, reject) {
      //         // reject(new Error("Whoops!"));
      //         setTimeout(() => {
      //           resolve(true);
      //         }, 200);
      //       });
    },
    async getData(action) {
      console.log("getData...");
      var that = this;
      // throw "OH no!!";
      console.dir(that.taskData);

      return new Promise(function(resolve, reject) {
        // reject(new Error("Whoops!"));
        setTimeout(() => {
          resolve({
            form: {},
            bizId: "",
            variables: {},
            log: {},
            opinion: "",
            opinions: [],
            nodeId: "Start",
            defId: null,
            taskId: "",
            instId: ""
          });
        }, 200);
      });
    },
    submit() {
      this.$emit("submit", { opinion: "That's OK! " });
    }
  }, //END methods
  created() {},
  mounted() {
    this.$emit("ready");
  },
  activated() {},
  deactivated() {},
  destroyed() {}
};
</script>

<style scoped>
</style>


