<template>
  <q-page padding>
    <div>

      <q-btn
        color="indigo-4"
        text-color="white"
        label="AG-Grid"
        size="sm"
        @click="openTab('AG-Grid','/share/cdd/#/render?uri=./grid/normal.vue','A')"
      ></q-btn>

      <q-btn
        color="indigo-4"
        text-color="white"
        label="Form-Fields"
        size="sm"
        @click="openTab('Form','/share/cdd/#/render?uri=./form/stand.vue','B')"
      ></q-btn>
      <hr />
      <q-btn color="white" text-color="dark" label="closeAll" size="sm" @click="closeAll();"></q-btn>
      <hr />
      <pre>{{data}}</pre>
    </div>
  </q-page>
</template>

<script>
import { reactive, computed, onMounted, getCurrentInstance } from "vue";

// import { useRouter } from "vue-router";
// // import { useStore } from "vuex";
// import { useQuasar } from "quasar";

// import tdd from "./TDD.vue";

export default {
  name: "index",
  // components: { tdd },
  setup(props) {
    const { proxy } = getCurrentInstance();
    const data = reactive({});
    proxy.$axios.get("/ws/app/info").then(res => {
      data.value = res;
    });
    return {
      data
    };
  },
  methods: {
    closeAll() {
      //
      this.closeTab("B");
      this.closeTab("A");

      // window.parent.document.getElementsByClassName("nav-link-home")[0].click()
    },

    closeTab(action) {
      console.dir("close " + action);
      window.parent.angular
        .element(window.parent.document.getElementById("offcanvas"))
        .scope()
        .closeTab({
          // selected:true,
          action: action
        });
    },
    openTab(title, url, action) {
      // this.closeTab(action);
      window.parent.angular
        .element(window.parent.document.getElementById("offcanvas"))
        .scope()
        .openTab({
          domain: null,
          icon: null,
          viewType: "html",
          context: {},
          model: null,
          title: title,
          params: {},
          views: [
            {
              name: url,
              type: "html"
            }
          ],
          action: action || url
        });
    }
  },
  mounted() {
    console.dir("mounted");
    // window.parent.angular.element(window.parent.document.getElementsByClassName("fa-bars")).click();
  }
};
</script>

<style scoped></style>
