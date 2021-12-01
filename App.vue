<script setup lang="ts">

import { ref } from "vue";

const color = ref<string>("blue")

function setRed(){
  color.value = "red"
}

</script>

<!-- --------------------------------------------------- -->

<template>

<div class="div1">
  <button v-on:click="setRed">Change Color !</button>
</div>

</template>

<!-- --------------------------------------------------- -->

<style scoped>

.div1{
  background-color: v-bind(color);
}

</style>
