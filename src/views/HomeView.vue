<script setup>
import ProfileComponent from "@/components/ProfileComponent";
const Projects = ["VirtualFlow", "YESCNC", "주식회사에이블유컴즈"];
</script>

<template>
  <div class="home_container">
    <ProfileComponent />
    <div class="home_section">
      <div class="home_title">
        {{ Projects[0] }} &nbsp; <br />
        2023.08~ 2023.09 <br />
        <div class="home_description">
          <div>[프론트엔드] 자동 생성 AI 를 통한 웹 게임 제작 솔루션 ]</div>
        </div>
      </div>
      <div class="home_section">
        <div class="home_title">
          {{ Projects[1] }} &nbsp; <br />2022.04 ~ 2023.01 <br />
        </div>
      </div>
      <div class="home_section">
        <div class="home_title">
          {{ Projects[1] }} &nbsp; <br />2021.03 ~ 2023.01 <br />
          <div class="home_description">
            <div>[풀스택] 동원훈련 대비시스템 리뉴얼</div>
          </div>
        </div>
      </div>
      <div class="home_section">
        <div class="home_title">
          {{ Projects[2] }} &nbsp; <br />2021.01 ~ 2021.02 <br />
          <div class="home_description">
            <div>[풀스택] 소노호텔 리뉴얼</div>
          </div>
        </div>
      </div>
      <div class="home_section">
        <div class="home_title">
          {{ Projects[2] }} &nbsp; <br />
          <br />
          <div class="home_description">
            <div>NS홈쇼핑 리뉴얼</div>
          </div>
        </div>
      </div>
      <div class="home_section">
        <div class="home_title">
          {{ Projects[2] }} &nbsp; <br />
          <br />
          <div class="home_description">
            <div>[UI/UX 디자이너] 디자인</div>
          </div>
        </div>
      </div>
      <div class="home_section">
        <div class="home_title">
          {{ Projects[2] }} &nbsp; <br />
          <br />
          <div class="home_description">
            <div>[웹디자이너] 롸킥스 & 아임낫어휴먼비잉</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.home_container {
  width: 100%;
  //color: rgba(255, 255, 255, 0.7);
  //background-color: #212526ff;
}
.home_section {
  width: 100%;
  height: 500px;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  background-color: #212526ff;
  color: rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  .home_title {
    height: 300px;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
  }
  .home_description {
    margin-top: -200px;
    text-align: center;
    justify-content: center;
  }
}

.home_title:hover {
  color: rgba(255, 255, 255, 0.5);
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

<!--<script>-->
<!--import { Options, Vue } from "vue-class-component";-->
<!--import ProfileComponent from "@/components/ProfileComponent.vue";-->

<!--@Options({-->
<!--  components: {-->
<!--    ProfileComponent,-->
<!--  },-->
<!--})-->
<!--export default class HomeView extends Vue {}-->
<!--</script>-->

<!--<template>-->
<!--  <div class="About">-->
<!--    <ProfileComponent />-->
<!--    <div>-->
<!--      <ul class="home_container">-->
<!--        <li>-->
<!--          <div style="display: flex; justify-content: center">-->
<!--            <div class="div_class">-->
<!--              {{ Projects[0] }} &nbsp; <br />2023.08.07 ~ 2023.09.06 <br />-->
<!--              <br />-->
<!--              <bold>-->
<!--                업무 경험 <br /><br />-->
<!--                자동 생성 AI 시스템을 이용한 게임 제작 솔루션-->
<!--              </bold>-->
<!--            </div>-->
<!--          </div>-->
<!--          <br /><br /><br />-->
<!--        </li>-->
<!--        <li>-->
<!--          <div style="display: flex; justify-content: center">-->
<!--            <div class="div_class">-->
<!--              <div>-->
<!--                {{ Projects[1] }} &nbsp; <br />2022.03.20 ~ 2023.01.24 <br />-->
<!--              </div>-->
<!--              <div>삼성 자동화 시스템 선행 개발</div>-->
<!--              <br />-->
<!--            </div>-->
<!--          </div>-->
<!--          <br />-->
<!--        </li>-->
<!--        <br />-->
<!--        <br />-->
<!--        <li>-->
<!--          <div style="display: flex; justify-content: center">-->
<!--            <div class="div_class">-->
<!--              <div>{{ Projects[2] }} &nbsp; <br />2021.01 ~ 2021.02 <br /></div>-->
<!--              <div>소노호텔 리뉴얼</div>-->
<!--              <br />-->
<!--            </div>-->
<!--          </div>-->
<!--          <br />-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped>-->
<!--div {-->
<!--  width: auto;-->
<!--  margin: 0;-->
<!--  padding: 0;-->
<!--}-->

<!--section {-->
<!--  margin: 0;-->
<!--  padding: 0;-->
<!--}-->

<!--.main_section {-->
<!--  width: 100%;-->
<!--  height: 1020px;-->
<!--}-->

<!--ul {-->
<!--  margin: 0 auto;-->
<!--}-->

<!--ul > li {-->
<!--  list-style: none;-->
<!--}-->
<!--img {-->
<!--  width: 60%;-->
<!--}-->

<!--.About {-->
<!--  margin: 0 auto;-->
<!--  text-align: center;-->
<!--  animation: fadein 1s;-->
<!--}-->

<!--.About > div {-->
<!--  margin: 0 auto;-->
<!--}-->

<!--.test {-->
<!--  animation: fadein 1s;-->
<!--}-->

<!--@keyframes fadein {-->
<!--  0% {-->
<!--    opacity: 0;-->
<!--  }-->
<!--  100% {-->
<!--    opacity: 1;-->
<!--  }-->
<!--}-->

<!--.div_class {-->
<!--  width: 100%;-->
<!--  margin: 0 50px;-->
<!--  float: left;-->
<!--  font-size: 20px;-->
<!--  background-color: black;-->
<!--  justify-content: center;-->
<!--  color: white;-->
<!--}-->

<!--@keyframes fadeInLeft {-->
<!--  0% {-->
<!--    opacity: 0;-->
<!--    transform: translate3d(-100%, 0, 0);-->
<!--  }-->
<!--  to {-->
<!--    opacity: 1;-->
<!--    transform: translateZ(0);-->
<!--  }-->
<!--}-->

<!--@keyframes fadeInLeft_Second {-->
<!--  0% {-->
<!--    opacity: 0;-->
<!--    transform: translate3d(-100%, 0, 0);-->
<!--  }-->
<!--  100% {-->
<!--    opacity: 1;-->
<!--    transform: translateZ(0);-->
<!--  }-->
<!--}-->
<!--.test_obj {-->
<!--  position: relative;-->
<!--  animation: fadeInLeft 1s;-->
<!--}-->

<!--.Night_Galeery {-->
<!--  width: 100%;-->
<!--  height: 1020px;-->
<!--  background: linear-gradient(#1c2052, #410e6b, #502570);-->
<!--  animation: opa 1s;-->
<!--}-->

<!--@keyframes opa {-->
<!--  0% {-->
<!--    opacity: 0;-->
<!--    transform: rotate(1deg);-->
<!--  }-->
<!--  20% {-->
<!--    opacity: 0.3;-->
<!--    transform: rotate(1deg);-->
<!--  }-->
<!--  40% {-->
<!--    opacity: 0.6;-->
<!--    transform: rotate(1deg);-->
<!--  }-->
<!--  60% {-->
<!--    opacity: 0.2;-->
<!--    color: white;-->
<!--  }-->
<!--  100% {-->
<!--    opacity: 1;-->
<!--  }-->
<!--}-->
<!--.bar {-->
<!--  width: 400px;-->
<!--  height: 400px;-->
<!--  background-color: black;-->
<!--}-->

<!--.snowf-canvas {-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--  left: 0;-->
<!--  top: 0;-->
<!--  position: absolute;-->
<!--}-->

<!--.section_container {-->
<!--  width: 100%;-->
<!--  color: gray;-->
<!--}-->

<!--.section_wrap {-->
<!--  position: absolute;-->
<!--  animation: sectionAni 1s;-->
<!--  margin: 400px calc(100% - 55%);-->
<!--  text-align: center;-->
<!--  justify-content: center;-->
<!--  justify-items: center;-->
<!--}-->

<!--@keyframes sectionAni {-->
<!--  0% {-->
<!--    opacity: 0;-->
<!--    margin-bottom: 200px;-->
<!--  }-->
<!--  40% {-->
<!--    color: rgba(255, 255, 255, 0.8);-->
<!--  }-->
<!--  100% {-->
<!--    opacity: 1;-->
<!--  }-->
<!--}-->

<!--.section_wrap > h1:hover {-->
<!--  color: rgba(255, 255, 255, 0.8);-->
<!--  cursor: pointer;-->
<!--  animation: plus 1s;-->
<!--}-->

<!--@keyframes plus {-->
<!--  0% {-->
<!--  }-->
<!--  100% {-->
<!--    transform: scale(1.1);-->
<!--  }-->
<!--}-->

<!--.modal_container {-->
<!--  width: 100%;-->
<!--  height: 800px;-->
<!--  margin: 0 auto;-->
<!--  position: fixed;-->
<!--  text-align: center;-->
<!--  justify-content: center;-->
<!--  justify-items: center;-->
<!--  animation: modalFade 1s;-->
<!--  z-index: 99;-->
<!--  background-color: rgba(255, 255, 255, 1);-->
<!--  color: black;-->
<!--}-->

<!--.modal_wrap {-->
<!--  width: 100%;-->
<!--  height: 1020px;-->
<!--  justify-content: center;-->
<!--  z-index: 99;-->
<!--  margin-top: 400px;-->
<!--}-->

<!--p {-->
<!--  color: gray;-->
<!--  z-index: 99;-->
<!--}-->

<!--@keyframes modalFade {-->
<!--  0% {-->
<!--    opacity: 0;-->
<!--    height: 200px;-->
<!--  }-->
<!--  100% {-->
<!--    opacity: 1;-->
<!--  }-->
<!--}-->

<!--.profile_context {-->
<!--  font-size: 20px;-->
<!--  line-height: 30px;-->
<!--  background-image: linear-gradient(-->
<!--    to right,-->
<!--    #009400,-->
<!--    #104081,-->
<!--    rgba(101, 183, 101, 0.9),-->
<!--    #bf52b1,-->
<!--    #009400-->
<!--  );-->
<!--  -webkit-background-clip: text;-->
<!--  -webkit-text-fill-color: transparent;-->
<!--}-->

<!--@keyframes color_gradient {-->
<!--  0% {-->
<!--    opacity: 0;-->
<!--  }-->
<!--  100% {-->
<!--    opacity: 1;-->
<!--  }-->
<!--}-->

<!--.v-enter-active,-->
<!--.v-leave-active {-->
<!--  transition: opacity 0.5s ease;-->
<!--}-->

<!--.v-enter-from,-->
<!--.v-leave-to {-->
<!--  opacity: 0;-->
<!--}-->

<!--.button_class {-->
<!--  width: 200px;-->
<!--  height: 40px;-->
<!--  background-color: black;-->
<!--  color: white;-->
<!--  border-radius: 50px;-->
<!--}-->

<!--.button_class:active {-->
<!--  transform: rotate(2deg);-->
<!--}-->
<!--</style>-->
