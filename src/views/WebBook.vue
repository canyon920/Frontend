<script setup>
import { ref } from "vue";

const left_check = ref(false);
const right_check = ref(false);

const left = () => {
  left_check.value = !left_check.value;
};
const right = () => {
  right_check.value = !right_check.value;
};
</script>

<template>
  <div class="web_book" id="WEB-BOOK">
    <div class="animation"></div>
    <button @click="left">Left</button>
    <div class="book_left"></div>
    <div class="book_right"></div>
    <button @lcikc="right">Right</button>
  </div>
</template>

<style scoped>
.web_book {
  display: flex;
}

.book_left {
  width: calc(100% - 50%);
  height: 1020px;
  background-color: black;
  animation: left_animation 1s;
  position: relative;
}

.book-right {
  width: calc(100% - 50%);
  height: 1020px;
  background-color: black;
  animation: right_animation 1s;
  position: relative;
}

@keyframes left_animation {
  0% {
    width: 200px;
    margin-right: -100%;
  }
  100% {
  }
}

@keyframes right_animation {
  0% {
    margin-right: 500px;
  }
  100% {
  }
}

.book_right {
  width: calc(100% - 50%);
  height: 1020px;
  background-color: green;
}
</style>
