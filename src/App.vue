<template>
  <nav>
    <ul class="HeaderMain">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/About">About</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="slot">TestView</router-link></li>
      <li class="right_container">
        <ul class="right_unline">
          <li><router-link to="rightcompo">Right Contents</router-link></li>
          <!--          <li><router-link to="right02">Right Contents02</router-link></li>-->
        </ul>
      </li>
    </ul>
  </nav>
  <!--  <div class="black-bg" v-if="modalOpen === true">-->
  <!--    <div class="white-bg">-->
  <!--      <h3>상품 제목입니다.</h3>-->
  <!--      <p>상품 설명입니다.</p>-->
  <!--      <button v-on:click="modalOpen = false" class="modal-exit-btn">-->
  <!--        닫기-->
  <!--      </button>-->
  <!--    </div>-->
  <!--  </div>-->
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
</template>

<style scoped>
nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.HeaderMain > li {
  list-style: none;
  color: #23633f;
  margin: 0 20px;
}

.HeaderMain {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  text-align: center;
  justify-content: center;
  justify-items: center;
  margin: 0 auto;
  background-color: white;
  position: relative;
  z-index: 99;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
.right_container {
  /*float: right;*/
  display: flex;
  right: 0;
  padding-right: 100px;
  position: absolute;
}

.right_unline {
  display: flex;
}

.right_unline > li {
  margin: 0 20px;
}
</style>
