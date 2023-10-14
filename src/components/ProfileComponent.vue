<script setup>
const about = "Hello, Welcome To World";
const Profile = [
  {
    name: "김동원",
    Phone: "010-2623-3000",
    Birth: "92.09.02",
    Email: "Canyon920@gmail.com",
    Address: "서울시 관악구",
    Carrer: "2년차",
  },
];
</script>

<template>
  <div id="PROFILE_COMPONENT" class="profile_container">
    <div class="profile_wrap">
      <h1 class="about_wrap">{{ about }}</h1>
    </div>
    <section class="section_container">
      <ul class="section_unline">
        <li>
          <ul class="section_profile">
            <li class="profile_list">
              <p class="profile_key">{{ Object.keys(Profile[0])[0] }}</p>
              <p>{{ Object.values(Profile[0])[0] }}</p>
            </li>
            <li class="profile_list">
              <p class="profile_key">{{ Object.keys(Profile[0])[1] }}</p>
              <p>{{ Object.values(Profile[0])[1] }}</p>
            </li>
            <li class="profile_list">
              <p class="profile_key">{{ Object.keys(Profile[0])[2] }}</p>
              <p>{{ Object.values(Profile[0])[2] }}</p>
            </li>
            <li class="profile_list">
              <p class="profile_key">{{ Object.keys(Profile[0])[3] }}</p>
              <p>{{ Object.values(Profile[0])[3] }}</p>
            </li>
            <li class="profile_list">
              <p class="profile_key">{{ Object.keys(Profile[0])[4] }}</p>
              <p>{{ Object.values(Profile[0])[4] }}</p>
            </li>
            <li class="profile_list">
              <p class="profile_key">{{ Object.keys(Profile[0])[5] }}</p>
              <p>{{ Object.values(Profile[0])[5] }}</p>
            </li>
          </ul>
          <ul class="section_profile2"></ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "./public/style/ProfileComponent.scss";
</style>
