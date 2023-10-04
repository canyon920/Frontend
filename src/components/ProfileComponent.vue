<script setup>
import { onMounted, ref } from "vue";
import DeveloperSKillModal from "@/components/modal/DeveloperSKillModal";
import SkillComponet from "@/components/SkillComponet";
let typedText = ref("");
let txt = `안녕하세요. 하루하루 성장해나가며 기쁨을 느끼는 \n 웹 개발자 김동원 입니다.`;
let i = 0;
const ViewText = () => {
  if (i < txt.length) {
    typedText.value += txt.charAt(i);
    i++;
    setTimeout(ViewText, 150);
  }
};

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

// for (let i = 0; i < Profile.length; i++) {
//   result.push(Profile[i]);
// }

onMounted(() => {
  ViewText();
});
</script>

<template>
  <section>
    <div class="profile_wrap">
      <div class="Profile">{{ txt }}</div>
    </div>
  </section>
  <DeveloperSKillModal />

  <div class="ProfileComponent">
    <div>Profile</div>
    <br /><br /><br />
    <section>
      <!--      <SkillComponet />-->
    </section>
    <section>
      <ul class="profile-wrap">
        <li>
          <ul class="profile_unline">
            <li class="profile_list">
              <div>
                <p class="profile_key">{{ Object.keys(Profile[0])[0] }}</p>
                <p>{{ Object.values(Profile[0])[0] }}</p>
              </div>
            </li>
            <li class="profile_list">
              <div>
                <p class="profile_key">{{ Object.keys(Profile[0])[1] }}</p>
                <p>{{ Object.values(Profile[0])[1] }}</p>
              </div>
            </li>
            <li class="profile_list">
              <div>
                <p class="profile_key">{{ Object.keys(Profile[0])[2] }}</p>
                <p>{{ Object.values(Profile[0])[2] }}</p>
              </div>
            </li>
          </ul>
          <ul class="profile_list2">
            <li class="profile_list">
              <div>
                <p class="profile_key">{{ Object.keys(Profile[0])[3] }}</p>
                <p>{{ Object.values(Profile[0])[3] }}</p>
              </div>
            </li>
            <li class="profile_list">
              <div>
                <p class="profile_key">{{ Object.keys(Profile[0])[4] }}</p>
                <p>{{ Object.values(Profile[0])[4] }}</p>
              </div>
            </li>
            <li class="profile_list">
              <div>
                <p class="profile_key">{{ Object.keys(Profile[0])[5] }}</p>
                <p>{{ Object.values(Profile[0])[5] }}</p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss">
ul {
  margin: 0;
  padding: 0;
}

.profile_wrap {
  animation: title_ani 2s ease-in-out;
}

@keyframes title_ani {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
.Profile {
  width: 48ch;
  margin: 200px auto;
  color: black;
  font-size: 1.6em;
  overflow: hidden;
  white-space: pre;
  text-align: center;
  border-right: 3px solid;
  animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

ul {
  list-style: none;
}

.profile-wrap {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
}

.ProfileComponent {
  margin-top: 300px;
}

.profile_unline {
  width: 100%;
  display: flex;
  text-align: center;
}

.profile_unline > li {
  width: 200px;
  height: 100px;
  list-style: none;
  border: 1px solid black;
  padding: 20px;
  margin: 20px;
}

.profile_list {
  background-color: black;
  color: white;
  border-radius: 20px;
}

.profile_list:hover {
  background-color: rgba(0, 0, 0, 0.9);
  color: #7f7f7f;
}
.profile_list2 > li {
  width: 200px;
  height: 100px;
  padding: 20px;
  margin: 20px;
  list-style: none;
  border: 1px solid black;
  border-radius: 25px;
}

.profile_list2 {
  display: flex;
}

.profile_list2 > li {
  width: 200px;
  height: 100px;
  list-style: none;
}

.profile_key {
  color: black;
  margin-bottom: 20px;
}

$color-black: hsl(0, 0%, 5%);
$color-color: hsl(0, 0%, 100%);

$color-html: hsl(15, 100%, 60%);
$color-css: hsl(200, 100%, 60%);
$color-scss: hsl(300, 100%, 60%);
$color-js: hsl(60, 100%, 60%);
$color-ts: hsl(220, 100%, 60%);
$color-node: hsl(110, 100%, 60%);
$color-react: hsl(180, 100%, 60%);
$color-angular: hsl(0, 100%, 60%);
$color-vue: hsl(145, 100%, 60%);

$porcent-html: 100;
$porcent-css: 100;
$porcent-scss: 100;
$porcent-js: 100;
$porcent-ts: 100;
$porcent-node: 100;
$porcent-react: 100;
$porcent-angular: 100;
$porcent-vue: 100;

@function strokeDashoffset($num) {
  @return 440 - (440 * $num) / 100;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-black;
}

.container__progressbars {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  min-width: 270px;
  width: 100%;
}

.progressbar {
  position: relative;
  width: 170px;
  height: 170px;
  margin: 1em;
  transform: rotate(-90deg);
}

.progressbar__svg {
  position: relative;
  width: 100%;
  height: 100%;
}

.progressbar__svg-circle {
  width: 100%;
  height: 100%;
  fill: none;
  stroke-width: 10;
  stroke-dasharray: 440;
  stroke-dashoffset: 440;
  stroke: hsl(0, 0%, 100%);
  stroke-linecap: round;
  transform: translate(5px, 5px); // stroke-width / 2
}

.shadow {
  &-html {
    filter: drop-shadow(0 0 5px $color-html);
  }
  &-css {
    filter: drop-shadow(0 0 5px $color-css);
  }
  &-scss {
    filter: drop-shadow(0 0 5px $color-scss);
  }
  &-js {
    filter: drop-shadow(0 0 5px $color-js);
  }
  &-ts {
    filter: drop-shadow(0 0 5px $color-ts);
  }
  &-node {
    filter: drop-shadow(0 0 5px $color-node);
  }
  &-react {
    filter: drop-shadow(0 0 5px $color-react);
  }
  &-angular {
    filter: drop-shadow(0 0 5px $color-angular);
  }
  &-vue {
    filter: drop-shadow(0 0 5px $color-vue);
  }
}

.circle {
  &-html {
    animation: anim_circle-html 1s ease-in-out forwards;
  }
  &-css {
    animation: anim_circle-css 1s ease-in-out forwards;
  }
  &-scss {
    animation: anim_circle-scss 1s ease-in-out forwards;
  }
  &-js {
    animation: anim_circle-js 1s ease-in-out forwards;
  }
  &-ts {
    animation: anim_circle-ts 1s ease-in-out forwards;
  }
  &-node {
    animation: anim_circle-node 1s ease-in-out forwards;
  }
  &-react {
    animation: anim_circle-react 1s ease-in-out forwards;
  }
  &-angular {
    animation: anim_circle-angular 1s ease-in-out forwards;
  }
  &-vue {
    animation: anim_circle-vue 1s ease-in-out forwards;
  }
}

.progressbar__text {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0.25em 0.5em;
  color: hsl(0, 0%, 100%);
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 0.25em;
  transform: translate(-50%, -50%) rotate(90deg);
}
</style>
