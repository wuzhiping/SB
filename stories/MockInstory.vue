<!-- YourPage.vue -->

<template>
  <div v-if="!loading && data">
    <pre>
      {{ data }}
    </pre>
  </div>
  <p v-if="loading">Loading...</p>
  <p v-if="error">There was an error fetching the data!</p>
</template>
<script>
import { ref } from "vue";

export default {
  name: "DocumentScreen",
  setup() {
    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);

    // fetch("https://aaa/get")
    //   .then((res) => {
    //     if (!res.ok) {
    //       error.value = res.statusText;
    //     }
    //     return res;
    //   })
    //   .then((res) => res.json())
    //   .then((requestData) => {
    //     data.value = requestData;
    //     loading.value = false;
    //   })
    //   .catch(() => {
    //     error.value = "error";
    //   });
    // return {
    //   error,
    //   loading,
    //   data,
    // };

    fetch("https://aaa/post/1?a=1", {
      method: "POST", // or 'PUT',
      body: JSON.stringify({ hehe: "haha" }), //'{"name":"hehe","age":10}'
    })
      .then((res) => {
        if (!res.ok) {
          error.value = res.statusText;
        }
        return res;
      })
      .then((res) => res.json())
      .then((requestData) => {
        data.value = requestData;
        loading.value = false;
      })
      .catch(() => {
        error.value = "error";
      });
    return {
      error,
      loading,
      data,
    };
  },
};
</script>
