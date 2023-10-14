<script setup></script>

<template>
  <div>
    <div class="right_container">
      <div class="night_gallery"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.right_container {
  width: 100%;
  height: 1020px;
}

.night_gallery {
  background: linear-gradient(#1c2052, #410e6b, #502570);
  animation: fadeUp 3s;
}

@keyframes fadeUp {
  0% {
    background-color: white;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
