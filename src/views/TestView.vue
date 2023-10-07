<script setup>
import { ref } from "vue";
import AppleHeader from "@/components/apple/AppleHeader";

const file_name = ref("파일을 선택하세요.");

const submit = (e) => {
  this.file_name = e.target.files[0].name;
};

const treeData = ref([
  {
    name: "미리보기",
    children: [
      { name: "hello" },
      { name: "world" },
      {
        name: "child folder",
        children: [
          {
            name: "child folder",
            children: [{ name: "hello" }, { name: "world" }],
          },
          { name: "hello" },
          { name: "world" },
          {
            name: "child folder",
            children: [{ name: "hello" }, { name: "world" }],
          },
        ],
      },
    ],
  },
  {
    name: "파일",
    children: [
      { name: "hello" },
      { name: "world" },
      {
        name: "child folder",
        children: [
          {
            name: "child folder",
            children: [{ name: "hello" }, { name: "world" }],
          },
          { name: "hello" },
          { name: "world" },
          {
            name: "child folder",
            children: [{ name: "hello" }, { name: "world" }],
          },
        ],
      },
    ],
  },
  {
    name: "편집",
    children: [
      { name: "hello" },
      { name: "world" },
      {
        name: "child folder",
        children: [
          {
            name: "child folder",
            children: [{ name: "hello" }, { name: "world" }],
          },
          { name: "hello" },
          { name: "world" },
          {
            name: "child folder",
            children: [{ name: "hello" }, { name: "world" }],
          },
        ],
      },
    ],
  },
]);
const task = ref([]);
const apple_header_check = ref(false);

const menu_modal = () => {
  apple_header_check.value != !apple_header_check.value;
};
</script>

<template>
  <div class="mac_os">
    <div class="get_os">
      <div class="progress_bar">
        <div class="progress_bar_in"></div>
      </div>
    </div>
  </div>
  <div>
    <img src="../../public/img/idontsee.png" />
    <div
      class="apple_header_main"
      style="
        width: 100%;
        z-index: 9999;
        display: flex;
        height: 30px;
        background: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(2.5px);
        -webkit-backdrop-filter: blur(4.5px);
      "
    >
      <ul v-for="tree in treeData" :key="tree" class="app_header">
        <AppleHeader class="item" :model="tree"></AppleHeader>
      </ul>
      <!--      <ul class="apple_header_main">-->
      <!--        <li>-->
      <!--          <ul class="list_header">-->
      <!--            <li v-for="menu in mac_menu" :key="menu.id" @click="menu_modal">-->
      <!--              {{ menu.menu }}-->
      <!--            </li>-->
      <!--            <li v-if="second"></li>-->
      <!--          </ul>-->
      <!--        </li>-->
      <!--      </ul>-->
      <div class="apple_bottom">
        <div class="icon"></div>
      </div>
    </div>
  </div>
  <div class="os_container">
    <div class="os_getter"></div>
    <div class="os_header"></div>
    <form @submit.prevent="submit">
      <div class="custom-file">
        <input id="customFile" type="file" @change="handleFileChange" />
        <label class="custom-file-label" for="customFile">{{
          file_name
        }}</label>
        {{ screen }}
        <!--        <img :src="require(`@/assets/images/${name}.png`)" />-->
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
@font-face {
  font-family: "apple";
  src: url("../../public/font/AppleSDGothicNeoB.ttf");
}

img {
  width: 100%;
  height: 1020px;
  z-index: -9999;
  position: absolute;
}

.mac_os {
  width: 100%;
  height: 1020px;
  position: absolute;
  background-color: black;
  animation: mac_original 10s;
  //animation-delay: 10s;
  opacity: 0;
  .get_os {
    width: 100%;
    height: 1020px;
    animation: mac_original 3s;
    animation-delay: 10s;
    .progress_bar {
      width: 20%;
      height: 5px;
      margin: 600px auto;
      text-align: center;
      justify-content: center;
      z-index: 10;
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 25px;
      .progress_bar_in {
        background-color: white;
        animation: progress_animation 5s;
      }
    }
  }
}

@keyframes progress_animation {
  0% {
    width: 10%;
    height: 5px;
    background-color: white;
  }
  60% {
    width: 60%;
    height: 5px;
    background-color: white;
  }
  80% {
    width: 80%;
    height: 5px;
    background-color: white;
  }
  100% {
    width: 100%;
    height: 5px;
    background-color: white;
  }
}
@keyframes mac_original {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes mac_background {
  0% {
    opacity: 1;
    background-color: black;
  }
  100% {
    opacity: 0;
    background-color: rgba(255, 255, 255, 0);
  }
}

.list_header {
  display: flex;
  margin: 0 auto;
  margin-left: 50px;
}

.list_header > li {
  width: 100px;
  list-style: none;
  text-decoration: none;
  line-height: 20px;
  margin-top: 10px;
  font-family: "apple";
}

.apple_bottom {
  width: 50%;
  height: 80px;
  border-radius: 30px;
  margin: 800px auto;
  justify-content: center;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  //box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  animation: fade 3s;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opaicty: 1;
  }
}
</style>

<!--<script setup>-->
<!--import * as THREE from "three";-->
<!--import { onUnmounted } from "vue";-->

<!--const scene = new THREE.Scene();-->
<!--const camera = new THREE.PerspectiveCamera(-->
<!--  75,-->
<!--  window.innerWidth / window.innerHeight,-->
<!--  0.1,-->
<!--  1000-->
<!--);-->

<!--const renderer2 = new THREE.WebGLRenderer();-->
<!--renderer2.setSize(window.innerWidth, window.innerHeight);-->
<!--document.body.appendChild(renderer2.domElement);-->

<!--const MAX_questionS = 500;-->

<!--// geometry-->
<!--const geometry = new THREE.BufferGeometry();-->

<!--// attributes-->
<!--const positions = new Float32Array(MAX_questionS * 3); // 3 vertices per question-->
<!--geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));-->

<!--// draw range-->
<!--const drawCount = 2; // draw the first 2 questions, only-->
<!--geometry.setDrawRange(0, drawCount);-->

<!--// material-->
<!--const material = new THREE.LineBasicMaterial({ color: 0xff0000 });-->

<!--// line-->
<!--const line = new THREE.Line(geometry, material);-->
<!--scene.add(line);-->

<!--onUnmounted(() => {-->
<!--  {-->
<!--    this.scene, this.line;-->
<!--  }-->
<!--});-->
<!--</script>-->
<!--<template>-->
<!--  <div></div>-->
<!--  &lt;!&ndash;  <Renderer ref="renderer2">&ndash;&gt;-->
<!--  &lt;!&ndash;    <Camera :position="{ z: 1 }" />&ndash;&gt;-->
<!--  &lt;!&ndash;    <Scene>&ndash;&gt;-->
<!--  &lt;!&ndash;      <questionLight :position="{ y: 20, z: 20 }" />&ndash;&gt;-->
<!--  &lt;!&ndash;      <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">&ndash;&gt;-->
<!--  &lt;!&ndash;        <LambertMaterial />&ndash;&gt;-->
<!--  &lt;!&ndash;      </Box>&ndash;&gt;-->
<!--  &lt;!&ndash;    </Scene>&ndash;&gt;-->
<!--  &lt;!&ndash;  </Renderer>&ndash;&gt;-->
<!--</template>-->
