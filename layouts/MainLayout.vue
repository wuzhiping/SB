<template>
  <q-layout view="lHh Lpr lff">
    <q-header reveal :class="`bg-transparent text-black nx-layout-header`">
      <q-toolbar class="q-my-sm">
        <!-- <q-btn flat round color="primary" :icon="`las ${isHome ? 'la-home' : 'la-arrow-left'}`" @click="goBack"></q-btn> -->
        <q-btn flat round replace to="/">
          <q-avatar>
            <q-img
              src="./assets/images/icon-NLV.svg"
              style="width: 36px; height: 36px"
              fit="contain"
              spinner-size="16px"
            />
          </q-avatar>
        </q-btn>

        <q-toolbar-title>{{ appTitle }}</q-toolbar-title>

        <!-- <q-btn flat round icon="las la-camera"></q-btn> -->
      </q-toolbar>
    </q-header>

    <q-footer reveal class="nx-footer q-pa-sm transparent flex flex-center">
      <q-card flat class="nx-nav nx-radius-lg">
        <q-card-section class="q-pa-xs"> footer </q-card-section>
      </q-card>
    </q-footer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <template v-if="$route.meta.keepAlive">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </template>
        <template v-else>
          <component :is="Component" />
        </template>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
// import { ref, computed, watch, defineComponent } from "vue";
// // import { useStore } from "vuex";
// import { useQuasar } from "quasar";

export default ({
  name: "MainLayout",

});
</script>
