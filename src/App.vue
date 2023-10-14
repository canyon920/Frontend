<template>
  <nav>
    <ul class="HeaderMain">
      <li><router-link to="/">Home</router-link></li>
      <!--      <li><router-link to="/About">About</router-link></li>-->
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="slot">TestView</router-link></li>
      <li class="right_container">
        <ul class="right_unline">
          <li><router-link to="context">Content</router-link></li>
          <!--          <li><router-link to="right02">Righㄹt Contents02</router-link></li>-->
        </ul>
      </li>
    </ul>
  </nav>
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
</template>

<style scoped>
@import "./main.css";
</style>
