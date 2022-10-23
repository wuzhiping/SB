<template>
  <q-page padding>
    <div>
      <h5>index page</h5>
      <tdd/>
    </div>
  </q-page>
</template>

<script>
// import { ref, computed, onMounted, getCurrentInstance } from "vue";
// import { useRouter } from "vue-router";
// // import { useStore } from "vuex";
// import { useQuasar } from "quasar";

import tdd from "./TDD.vue";

export default {
  name: "index",

  components: { tdd },

};
</script>

<style scoped></style>
