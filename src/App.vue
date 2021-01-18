<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<script>
  import Layout from "./components/common/Layout/Layout";

  export default {
    name: 'App',
    data() {
      return {}
    },
    components: {
      Layout,
    },
    methods: {}
  }
</script>

<style>
  @import "./assets/css/base.css";
</style>
