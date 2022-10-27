<template>
  <div v-if="viewName">
<!--    <span>{{ viewName }}</span>-->
    <q-page>
      <div class="fe-content">
        <transition name="fade">
          <component :is="comp"></component>
        </transition>
      </div>
    </q-page>
  </div>
</template>

<script>
import {
  ref,
  computed,
  onBeforeMount,
  onMounted,
  watch,
  defineAsyncComponent
} from "vue";

import { useRoute, useRouter } from "vue-router";

export default {
  name: "render",
  props: ["URI"],
  setup(props) {
    const $route = useRoute();
    const $router = useRouter();

    const viewName = computed(() => {
      return $route.query.uri || props.URI || false;
    });

    const comp = computed(() => {
      // const view = this.view; // the trick is here
      console.log("render.comp", viewName.value);
      return defineAsyncComponent(() =>
        import(`./${viewName.value}?_t_=${Date.now()}`)
      );
      // or, equivalently, use Function.prototype.bind function like this:
      // return Vue.defineAsyncComponent( (url => loadModule(url, options)).bind(null, `/${ this.currentComponent }.vue`) );
    });

    return {
      comp,
      viewName
    };
  },
  methods: {} //END methods
};
</script>

<style scoped></style>
