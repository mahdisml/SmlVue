<script setup lang="ts">

import { ref } from "vue";

const color = ref<string>("blue")

function setRed(){
  color.value = "red"
}

const image = ref<string>(require("../assets/images/s1.jpg"))

</script>

<!-- --------------------------------------------------- -->

<template>
<div>
  <div :class="$style.div1">
    <button v-on:click="setRed">Change Color !</button>
  </div>
  <img src = "../assets/images/logo.png"/>
  <img v-bind:src="image"/>
  
</div>
</template>

<!-- --------------------------------------------------- -->

<style module>

.div1{
  background-color: v-bind(color);
}

</style>
