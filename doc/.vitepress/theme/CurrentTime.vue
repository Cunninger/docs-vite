<template>
    <div id="app">
      <h3>当前时间: {{ now }}</h3>
      <p>自上学以来已经过了: {{ count }} 天</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  
  export default {
    setup() {
      const now = ref(new Date().toLocaleString());
      const count = ref(0);
  
      onMounted(() => {
        const startDay = new Date("2022-09-01").getTime();
        const nowDay = new Date().getTime();
        count.value = Math.floor((nowDay - startDay) / (1000 * 60 * 60 * 24)) + 1;
        setInterval(() => {
          now.value = new Date().toLocaleString();
        }, 1000);
      });
  
      return {
        now,
        count
      };
    }
  };
  </script>
  