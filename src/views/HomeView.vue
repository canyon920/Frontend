<script>
import { Options, Vue } from "vue-class-component";
import ProfileComponent from "@/components/ProfileComponent.vue";

@Options({
  components: {
    ProfileComponent,
   checter: "" },
})
export default class HomeView extends Vue {
  Projects = ["VirtualFlow", "YESCNC", "주식회사에이블유컴즈"];
}
</script>

<template>
  <div class="About">
    <div class="test" style="font-size: 200px">{{ testCount }}</div>
    <ProfileComponent />
    <div>
      <h3>Carrer</h3>
      <ul>
        <li>
          <div style="display: flex; justify-content: center">
            <div class="div_class">
              {{ Projects[0] }} &nbsp; <br />2023.08.07 ~ 2023.09.06 <br />
              <br />
              <bold>
                업무 경험 <br /><br />
                네이버와 언리얼 엔진 3D 게임 웹 프론트엔드를 담당 했습니다.
                <br />
                프론트엔드를 담당 했습니다.
              </bold>
            </div>
          </div>
          <br /><br /><br />
        </li>
        <li>
          <div style="display: flex; justify-content: center">
            <div>
              <div class="div_class">
                {{ Projects[1] }} &nbsp; <br />2022.03.20 ~ 2023.01.24 <br />
              </div>
              <div>삼성 자동화 시스템 선행 개발</div>
              <br />
            </div>
          </div>
          <br />
        </li>
        <br />
        <br />
        <li>
          <div style="display: flex; justify-content: center">
            <div>
              <div class="div_class">
                {{ Projects[2] }} &nbsp; <br />2021.01 ~ 2021.02 <br />
              </div>
              <div>소노호텔 리뉴얼</div>
              <br />
            </div>
          </div>
          <br />
        </li>
        <div>
          <a
            href="https://github.com/canyon920?tab=repositories"
            target="_blank"
            >Github</a
          >
        </div>
      </ul>
    </div>
  </div>
</template>

<style scoped>
div {
  width: auto;
  margin: 0;
  padding: 0;
}

section {
  margin: 0;
  padding: 0;
}

.main_section {
  width: 100%;
  height: 1020px;
  background-color: black;
}

ul {
  margin: 0 auto;
}

ul > li {
  list-style: none;
}
img {
  width: 60%;
}

.About {
  margin: 0 auto;
  text-align: center;
  animation: fadein 1s;
}

.About > div {
  margin: 0 auto;
}

.test {
  animation: fadein 1s;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.div_class {
  font-size: 20px;
}
</style>
