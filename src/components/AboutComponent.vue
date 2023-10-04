<script setup>
const profile = "소개";
</script>

<template>
  <div>
    About Con tainer
    <div id="info">Description</div>
    {{ profile }}
  </div>
</template>

<style scoped>
#info {
  position: absolute;
  top: 10px;
  width: 100%;
  text-align: center;
  z-index: 100;
  display: block;
}
</style>
