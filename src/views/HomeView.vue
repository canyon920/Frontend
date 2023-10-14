<script setup>
const Projects = [
  "VirtualFlow",
  "YESCNC",
  "주식회사에이블유컴즈",
  "웨인힐스벤처스",
  "현대백화점 판교점",
  "롸킥스",
];
</script>
<template>
  <center>
    <div class="home_animation"></div>
    <div>
      <ul>
        <li>
          <ul>
            <li>
              <div style="width: 300px; height: 200px">
                <h3>
                  <a href="https://t4framework.com/#Campany" target="_blank">
                    {{ Projects[0] }}
                  </a>
                </h3>
                <!--                <p>2023.08~ 2023.09</p>-->
                프론트엔드
              </div>
            </li>
            <li>
              <div style="width: 300px; height: 200px">
                <h3>
                  <a href="#" target="_blank">{{ Projects[1] }}</a>
                </h3>
                <!--              <p>2023.08~ 2023.09</p>-->
                풀스택
              </div>
            </li>
            <li>
              <div style="width: 300px; height: 200px">
                <h3>{{ Projects[2] }}</h3>
                <!--              <p>2023.08~ 2023.09</p>-->
                프론트엔드
              </div>
            </li>
            <li>
              <div style="width: 300px; height: 200px">
                <h3>{{ Projects[3] }}</h3>
                <!--              <p>2023.08~ 2023.09</p>-->
                UI/UX 디자이너
              </div>
            </li>
            <li>
              <div style="width: 300px; height: 200px">
                <h3>
                  <a href="https://www.waynehills.co/history" target="_blank">{{
                    Projects[4]
                  }}</a>
                </h3>
                <!--              <p>2023.08~ 2023.09</p>-->
                이벤트 프라자 기획 및 디자이너
              </div>
            </li>
            <li>
              <div style="width: 300px; height: 200px">
                <h3>
                  <a href="https://lakickz.com/" target="_blank">
                    {{ Projects[5] }}
                  </a>
                </h3>
                <!--              <p>2023.08~ 2023.09</p>-->
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>Hello</li>
          </ul>
        </li>
      </ul>
    </div>
  </center>
</template>

<style>
a {
  color: black;
  text-decoraiton: none;
}
.home_animation {
  width: 100%;
  height: 1020px;
  background-color: white;
  color: white;
  animation: home_background 3s;
  position: absolute;
  z-index: -99;
}

@keyframes home_background {
  0% {
    width: 100%;
    height: 1020px;
    background: linear-gradient(#1c2052, #410e6b, #502570);
    position: absolute;
    opacity: 1;
  }
  100% {
    opacity: 0;
    margin-left: 200%;
  }
}

a:hover {
  color: #0955ab;
}
</style>
<!--<script setup>-->
<!--import ProfileComponent from "@/components/ProfileComponent";-->
<!--const Projects = ["VirtualFlow", "YESCNC", "주식회사에이블유컴즈"];-->
<!--</script>-->

<!--<template>-->
<!--  <div class="home_container">-->
<!--    <ProfileComponent />-->
<!--    <div class="home_section">-->
<!--      <div class="home_title">-->
<!--        {{ Projects[0] }} &nbsp; <br />-->
<!--        2023.08~ 2023.09 <br />-->
<!--        <div class="home_description">-->
<!--          <div>[프론트엔드] 자동 생성 AI 를 통한 웹 게임 제작 솔루션 ]</div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="home_section">-->
<!--        <div class="home_title">-->
<!--          {{ Projects[1] }} &nbsp; <br />2022.04 ~ 2023.01 <br />-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="home_section">-->
<!--        <div class="home_title">-->
<!--          {{ Projects[1] }} &nbsp; <br />2021.03 ~ 2023.01 <br />-->
<!--          <div class="home_description">-->
<!--            <div>[풀스택] 동원훈련 대비시스템 리뉴얼</div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="home_section">-->
<!--        <div class="home_title">-->
<!--          {{ Projects[2] }} &nbsp; <br />2021.01 ~ 2021.02 <br />-->
<!--          <div class="home_description">-->
<!--            <div>[풀스택] 소노호텔 리뉴얼</div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="home_section">-->
<!--        <div class="home_title">-->
<!--          {{ Projects[2] }} &nbsp; <br />-->
<!--          <br />-->
<!--          <div class="home_description">-->
<!--            <div>NS홈쇼핑 리뉴얼</div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="home_section">-->
<!--        <div class="home_title">-->
<!--          {{ Projects[2] }} &nbsp; <br />-->
<!--          <br />-->
<!--          <div class="home_description">-->
<!--            <div>[UI/UX 디자이너] 디자인</div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="home_section">-->
<!--        <div class="home_title">-->
<!--          {{ Projects[2] }} &nbsp; <br />-->
<!--          <br />-->
<!--          <div class="home_description">-->
<!--            <div>[웹디자이너] 롸킥스 & 아임낫어휴먼비잉</div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<!--<style scoped lang="scss">-->
<!--.home_container {-->
<!--  width: 100%;-->
<!--  //color: rgba(255, 255, 255, 0.7);-->
<!--  //background-color: #212526ff;-->
<!--}-->
<!--.home_section {-->
<!--  width: 100%;-->
<!--  height: 500px;-->
<!--  margin: 0 auto;-->
<!--  text-align: center;-->
<!--  justify-content: center;-->
<!--  background-color: #212526ff;-->
<!--  color: rgba(255, 255, 255, 0.7);-->
<!--  border-bottom: 1px solid rgba(255, 255, 255, 0.2);-->
<!--  .home_title {-->
<!--    height: 300px;-->
<!--    margin: 0 auto;-->
<!--    text-align: center;-->
<!--    justify-content: center;-->
<!--  }-->
<!--  .home_description {-->
<!--    margin-top: -200px;-->
<!--    text-align: center;-->
<!--    justify-content: center;-->
<!--  }-->
<!--}-->

<!--.home_title:hover {-->
<!--  color: rgba(255, 255, 255, 0.5);-->
<!--}-->

<!--@keyframes fade {-->
<!--  0% {-->
<!--    opacity: 0;-->
<!--  }-->
<!--  100% {-->
<!--    opacity: 1;-->
<!--  }-->
<!--}-->
<!--</style>-->

<!--&lt;!&ndash;<script>&ndash;&gt;-->
<!--&lt;!&ndash;import { Options, Vue } from "vue-class-component";&ndash;&gt;-->
<!--&lt;!&ndash;import ProfileComponent from "@/components/ProfileComponent.vue";&ndash;&gt;-->

<!--&lt;!&ndash;@Options({&ndash;&gt;-->
<!--&lt;!&ndash;  components: {&ndash;&gt;-->
<!--&lt;!&ndash;    ProfileComponent,&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;})&ndash;&gt;-->
<!--&lt;!&ndash;export default class HomeView extends Vue {}&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->

<!--&lt;!&ndash;<template>&ndash;&gt;-->
<!--&lt;!&ndash;  <div class="About">&ndash;&gt;-->
<!--&lt;!&ndash;    <ProfileComponent />&ndash;&gt;-->
<!--&lt;!&ndash;    <div>&ndash;&gt;-->
<!--&lt;!&ndash;      <ul class="home_container">&ndash;&gt;-->
<!--&lt;!&ndash;        <li>&ndash;&gt;-->
<!--&lt;!&ndash;          <div style="display: flex; justify-content: center">&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="div_class">&ndash;&gt;-->
<!--&lt;!&ndash;              {{ Projects[0] }} &nbsp; <br />2023.08.07 ~ 2023.09.06 <br />&ndash;&gt;-->
<!--&lt;!&ndash;              <br />&ndash;&gt;-->
<!--&lt;!&ndash;              <bold>&ndash;&gt;-->
<!--&lt;!&ndash;                업무 경험 <br /><br />&ndash;&gt;-->
<!--&lt;!&ndash;                자동 생성 AI 시스템을 이용한 게임 제작 솔루션&ndash;&gt;-->
<!--&lt;!&ndash;              </bold>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;          <br /><br /><br />&ndash;&gt;-->
<!--&lt;!&ndash;        </li>&ndash;&gt;-->
<!--&lt;!&ndash;        <li>&ndash;&gt;-->
<!--&lt;!&ndash;          <div style="display: flex; justify-content: center">&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="div_class">&ndash;&gt;-->
<!--&lt;!&ndash;              <div>&ndash;&gt;-->
<!--&lt;!&ndash;                {{ Projects[1] }} &nbsp; <br />2022.03.20 ~ 2023.01.24 <br />&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--&lt;!&ndash;              <div>삼성 자동화 시스템 선행 개발</div>&ndash;&gt;-->
<!--&lt;!&ndash;              <br />&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;          <br />&ndash;&gt;-->
<!--&lt;!&ndash;        </li>&ndash;&gt;-->
<!--&lt;!&ndash;        <br />&ndash;&gt;-->
<!--&lt;!&ndash;        <br />&ndash;&gt;-->
<!--&lt;!&ndash;        <li>&ndash;&gt;-->
<!--&lt;!&ndash;          <div style="display: flex; justify-content: center">&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="div_class">&ndash;&gt;-->
<!--&lt;!&ndash;              <div>{{ Projects[2] }} &nbsp; <br />2021.01 ~ 2021.02 <br /></div>&ndash;&gt;-->
<!--&lt;!&ndash;              <div>소노호텔 리뉴얼</div>&ndash;&gt;-->
<!--&lt;!&ndash;              <br />&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;          <br />&ndash;&gt;-->
<!--&lt;!&ndash;        </li>&ndash;&gt;-->
<!--&lt;!&ndash;      </ul>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->

<!--&lt;!&ndash;<style scoped>&ndash;&gt;-->
<!--&lt;!&ndash;div {&ndash;&gt;-->
<!--&lt;!&ndash;  width: auto;&ndash;&gt;-->
<!--&lt;!&ndash;  margin: 0;&ndash;&gt;-->
<!--&lt;!&ndash;  padding: 0;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;section {&ndash;&gt;-->
<!--&lt;!&ndash;  margin: 0;&ndash;&gt;-->
<!--&lt;!&ndash;  padding: 0;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.main_section {&ndash;&gt;-->
<!--&lt;!&ndash;  width: 100%;&ndash;&gt;-->
<!--&lt;!&ndash;  height: 1020px;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;ul {&ndash;&gt;-->
<!--&lt;!&ndash;  margin: 0 auto;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;ul > li {&ndash;&gt;-->
<!--&lt;!&ndash;  list-style: none;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;img {&ndash;&gt;-->
<!--&lt;!&ndash;  width: 60%;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.About {&ndash;&gt;-->
<!--&lt;!&ndash;  margin: 0 auto;&ndash;&gt;-->
<!--&lt;!&ndash;  text-align: center;&ndash;&gt;-->
<!--&lt;!&ndash;  animation: fadein 1s;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.About > div {&ndash;&gt;-->
<!--&lt;!&ndash;  margin: 0 auto;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.test {&ndash;&gt;-->
<!--&lt;!&ndash;  animation: fadein 1s;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;@keyframes fadein {&ndash;&gt;-->
<!--&lt;!&ndash;  0% {&ndash;&gt;-->
<!--&lt;!&ndash;    opacity: 0;&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;  100% {&ndash;&gt;-->
<!--&lt;!&ndash;    opacity: 1;&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.div_class {&ndash;&gt;-->
<!--&lt;!&ndash;  width: 100%;&ndash;&gt;-->
<!--&lt;!&ndash;  margin: 0 50px;&ndash;&gt;-->
<!--&lt;!&ndash;  float: left;&ndash;&gt;-->
<!--&lt;!&ndash;  font-size: 20px;&ndash;&gt;-->
<!--&lt;!&ndash;  background-color: black;&ndash;&gt;-->
<!--&lt;!&ndash;  justify-content: center;&ndash;&gt;-->
<!--&lt;!&ndash;  color: white;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;@keyframes fadeInLeft {&ndash;&gt;-->
<!--&lt;!&ndash;  0% {&ndash;&gt;-->
<!--&lt;!&ndash;    opacity: 0;&ndash;&gt;-->
<!--&lt;!&ndash;    transform: translate3d(-100%, 0, 0);&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;  to {&ndash;&gt;-->
<!--&lt;!&ndash;    opacity: 1;&ndash;&gt;-->
<!--&lt;!&ndash;    transform: translateZ(0);&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;@keyframes fadeInLeft_Second {&ndash;&gt;-->
<!--&lt;!&ndash;  0% {&ndash;&gt;-->
<!--&lt;!&ndash;    opacity: 0;&ndash;&gt;-->
<!--&lt;!&ndash;    transform: translate3d(-100%, 0, 0);&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;  100% {&ndash;&gt;-->
<!--&lt;!&ndash;    opacity: 1;&ndash;&gt;-->
<!--&lt;!&ndash;    transform: translateZ(0);&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;.test_obj {&ndash;&gt;-->
<!--&lt;!&ndash;  position: relative;&ndash;&gt;-->
<!--&lt;!&ndash;  animation: fadeInLeft 1s;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.Night_Galeery {&ndash;&gt;-->
<!--&lt;!&ndash;  width: 100%;&ndash;&gt;-->
<!--&lt;!&ndash;  height: 1020px;&ndash;&gt;-->
<!--&lt;!&ndash;  background: linear-gradient(#1c2052, #410e6b, #502570);&ndash;&gt;-->
<!--&lt;!&ndash;  animation: opa 1s;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;@keyframes opa {&ndash;&gt;-->
<!--&lt;!&ndash;  0% {&ndash;&gt;-->
<!--&lt;!&ndash;    opacity: 0;&ndash;&gt;-->
<!--&lt;!&ndash;    transform: rotate(1deg);&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;  20% {&ndash;&gt;-->
<!--&lt;!&ndash;    opacity: 0.3;&ndash;&gt;-->
<!--&lt;!&ndash;    transform: rotate(1deg);&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;  40% {&ndash;&gt;-->
<!--&lt;!&ndash;    opacity: 0.6;&ndash;&gt;-->
<!--&lt;!&ndash;    transform: rotate(1deg);&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;  60% {&ndash;&gt;-->
<!--&lt;!&ndash;    opacity: 0.2;&ndash;&gt;-->
<!--&lt;!&ndash;    color: white;&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;  100% {&ndash;&gt;-->
<!--&lt;!&ndash;    opacity: 1;&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;.bar {&ndash;&gt;-->
<!--&lt;!&ndash;  width: 400px;&ndash;&gt;-->
<!--&lt;!&ndash;  height: 400px;&ndash;&gt;-->
<!--&lt;!&ndash;  background-color: black;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.snowf-canvas {&ndash;&gt;-->
<!--&lt;!&ndash;  width: 100%;&ndash;&gt;-->
<!--&lt;!&ndash;  height: 100%;&ndash;&gt;-->
<!--&lt;!&ndash;  left: 0;&ndash;&gt;-->
<!--&lt;!&ndash;  top: 0;&ndash;&gt;-->
<!--&lt;!&ndash;  position: absolute;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.section_container {&ndash;&gt;-->
<!--&lt;!&ndash;  width: 100%;&ndash;&gt;-->
<!--&lt;!&ndash;  color: gray;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.section_wrap {&ndash;&gt;-->
<!--&lt;!&ndash;  position: absolute;&ndash;&gt;-->
<!--&lt;!&ndash;  animation: sectionAni 1s;&ndash;&gt;-->
<!--&lt;!&ndash;  margin: 400px calc(100% - 55%);&ndash;&gt;-->
<!--&lt;!&ndash;  text-align: center;&ndash;&gt;-->
<!--&lt;!&ndash;  justify-content: center;&ndash;&gt;-->
<!--&lt;!&ndash;  justify-items: center;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;@keyframes sectionAni {&ndash;&gt;-->
<!--&lt;!&ndash;  0% {&ndash;&gt;-->
<!--&lt;!&ndash;    opacity: 0;&ndash;&gt;-->
<!--&lt;!&ndash;    margin-bottom: 200px;&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;  40% {&ndash;&gt;-->
<!--&lt;!&ndash;    color: rgba(255, 255, 255, 0.8);&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;  100% {&ndash;&gt;-->
<!--&lt;!&ndash;    opacity: 1;&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.section_wrap > h1:hover {&ndash;&gt;-->
<!--&lt;!&ndash;  color: rgba(255, 255, 255, 0.8);&ndash;&gt;-->
<!--&lt;!&ndash;  cursor: pointer;&ndash;&gt;-->
<!--&lt;!&ndash;  animation: plus 1s;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;@keyframes plus {&ndash;&gt;-->
<!--&lt;!&ndash;  0% {&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;  100% {&ndash;&gt;-->
<!--&lt;!&ndash;    transform: scale(1.1);&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.modal_container {&ndash;&gt;-->
<!--&lt;!&ndash;  width: 100%;&ndash;&gt;-->
<!--&lt;!&ndash;  height: 800px;&ndash;&gt;-->
<!--&lt;!&ndash;  margin: 0 auto;&ndash;&gt;-->
<!--&lt;!&ndash;  position: fixed;&ndash;&gt;-->
<!--&lt;!&ndash;  text-align: center;&ndash;&gt;-->
<!--&lt;!&ndash;  justify-content: center;&ndash;&gt;-->
<!--&lt;!&ndash;  justify-items: center;&ndash;&gt;-->
<!--&lt;!&ndash;  animation: modalFade 1s;&ndash;&gt;-->
<!--&lt;!&ndash;  z-index: 99;&ndash;&gt;-->
<!--&lt;!&ndash;  background-color: rgba(255, 255, 255, 1);&ndash;&gt;-->
<!--&lt;!&ndash;  color: black;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.modal_wrap {&ndash;&gt;-->
<!--&lt;!&ndash;  width: 100%;&ndash;&gt;-->
<!--&lt;!&ndash;  height: 1020px;&ndash;&gt;-->
<!--&lt;!&ndash;  justify-content: center;&ndash;&gt;-->
<!--&lt;!&ndash;  z-index: 99;&ndash;&gt;-->
<!--&lt;!&ndash;  margin-top: 400px;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;p {&ndash;&gt;-->
<!--&lt;!&ndash;  color: gray;&ndash;&gt;-->
<!--&lt;!&ndash;  z-index: 99;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;@keyframes modalFade {&ndash;&gt;-->
<!--&lt;!&ndash;  0% {&ndash;&gt;-->
<!--&lt;!&ndash;    opacity: 0;&ndash;&gt;-->
<!--&lt;!&ndash;    height: 200px;&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;  100% {&ndash;&gt;-->
<!--&lt;!&ndash;    opacity: 1;&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.profile_context {&ndash;&gt;-->
<!--&lt;!&ndash;  font-size: 20px;&ndash;&gt;-->
<!--&lt;!&ndash;  line-height: 30px;&ndash;&gt;-->
<!--&lt;!&ndash;  background-image: linear-gradient(&ndash;&gt;-->
<!--&lt;!&ndash;    to right,&ndash;&gt;-->
<!--&lt;!&ndash;    #009400,&ndash;&gt;-->
<!--&lt;!&ndash;    #104081,&ndash;&gt;-->
<!--&lt;!&ndash;    rgba(101, 183, 101, 0.9),&ndash;&gt;-->
<!--&lt;!&ndash;    #bf52b1,&ndash;&gt;-->
<!--&lt;!&ndash;    #009400&ndash;&gt;-->
<!--&lt;!&ndash;  );&ndash;&gt;-->
<!--&lt;!&ndash;  -webkit-background-clip: text;&ndash;&gt;-->
<!--&lt;!&ndash;  -webkit-text-fill-color: transparent;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;@keyframes color_gradient {&ndash;&gt;-->
<!--&lt;!&ndash;  0% {&ndash;&gt;-->
<!--&lt;!&ndash;    opacity: 0;&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;  100% {&ndash;&gt;-->
<!--&lt;!&ndash;    opacity: 1;&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.v-enter-active,&ndash;&gt;-->
<!--&lt;!&ndash;.v-leave-active {&ndash;&gt;-->
<!--&lt;!&ndash;  transition: opacity 0.5s ease;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.v-enter-from,&ndash;&gt;-->
<!--&lt;!&ndash;.v-leave-to {&ndash;&gt;-->
<!--&lt;!&ndash;  opacity: 0;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.button_class {&ndash;&gt;-->
<!--&lt;!&ndash;  width: 200px;&ndash;&gt;-->
<!--&lt;!&ndash;  height: 40px;&ndash;&gt;-->
<!--&lt;!&ndash;  background-color: black;&ndash;&gt;-->
<!--&lt;!&ndash;  color: white;&ndash;&gt;-->
<!--&lt;!&ndash;  border-radius: 50px;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.button_class:active {&ndash;&gt;-->
<!--&lt;!&ndash;  transform: rotate(2deg);&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</style>&ndash;&gt;-->
