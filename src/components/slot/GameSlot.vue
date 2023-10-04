<script setup></script>
<template>Game Slot Example Code</template>
<!--<script setup>-->
<!--const fooProps = {-->
<!--  id: 1,-->
<!--  msg: "Hello",-->
<!--};-->
<!--import { ref } from "vue";-->
<!--import * as THREE from "three";-->
<!--import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";-->
<!--import { FontLoader } from "three/examples/jsm/loaders/FontLoader";-->

<!--// WebGLContextEvent event with type "webglcontextlost" is logged.-->

<!--const game_engine = () => {-->
<!--  prompt("", "");-->
<!--};-->

<!--const web = ref("");-->
<!--let camera, scene, renderer;-->

<!--init();-->

<!--// 카메라 초기화 함수-->
<!--function init() {-->
<!--  camera = new THREE.PerspectiveCamera(-->
<!--    45,-->
<!--    window.innerWidth / window.innerHeight,-->
<!--    1,-->
<!--    10000-->
<!--  );-->
<!--  camera.position.set(0, -400, 600);-->

<!--  scene = new THREE.Scene();-->
<!--  scene.background = new THREE.Color(0xf0f0f0);-->
<!--  // fontLoader-->
<!--  const loader = new FontLoader();-->

<!--  loader.load("/font.json", function (font) {-->
<!--    const color = 0x006699;-->

<!--    const matDark = new THREE.LineBasicMaterial({-->
<!--      color: color,-->
<!--      side: THREE.DoubleSide,-->
<!--    });-->

<!--    const matLite = new THREE.MeshBasicMaterial({-->
<!--      color: color,-->
<!--      transparent: true,-->
<!--      opacity: 0.4,-->
<!--      side: THREE.DoubleSide,-->
<!--    });-->

<!--    const message = "Level Settings";-->

<!--    const shapes = font.generateShapes(message, 100);-->

<!--    const geometry = new THREE.ShapeGeometry(shapes);-->

<!--    geometry.computeBoundingBox();-->

<!--    const xMid =-->
<!--      -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);-->

<!--    geometry.translate(xMid, 0, 0);-->

<!--    // make shape ( N.B. edge view not visible )-->

<!--    const text = new THREE.Mesh(geometry, matLite);-->
<!--    text.position.z = -150;-->
<!--    scene.add(text);-->

<!--    // make line shape ( N.B. edge view remains visible )-->

<!--    const holeShapes = [];-->

<!--    for (let i = 0; i < shapes.length; i++) {-->
<!--      const shape = shapes[i];-->

<!--      if (shape.holes && shape.holes.length > 0) {-->
<!--        for (let j = 0; j < shape.holes.length; j++) {-->
<!--          const hole = shape.holes[j];-->
<!--          holeShapes.push(hole);-->
<!--        }-->
<!--      }-->
<!--    }-->

<!--    shapes.push.apply(shapes, holeShapes);-->

<!--    const lineText = new THREE.Object3D();-->

<!--    for (let i = 0; i < shapes.length; i++) {-->
<!--      const shape = shapes[i];-->
<!--      const questions = shape.getquestions();-->
<!--      const geometry = new THREE.BufferGeometry().setFromquestions(questions);-->

<!--      geometry.translate(xMid, 0, 0);-->
<!--      const lineMesh = new THREE.Line(geometry, matDark);-->
<!--      lineText.add(lineMesh);-->
<!--    }-->

<!--    scene.add(lineText);-->

<!--    render();-->
<!--  }); //end load function-->

<!--  renderer = new THREE.WebGLRenderer({ antialias: true });-->
<!--  renderer.setPixelRatio(window.devicePixelRatio);-->
<!--  renderer.setSize(window.innerWidth, window.innerHeight);-->
<!--  document.body.appendChild(renderer.domElement);-->

<!--  const controls = new OrbitControls(camera, renderer.domElement);-->
<!--  controls.target.set(0, 0, 0);-->
<!--  controls.update();-->
<!--  controls.addEventListener("change", render);-->
<!--  window.addEventListener("resize", onWindowResize);-->
<!--} // end init-->

<!--function onWindowResize() {-->
<!--  camera.aspect = window.innerWidth / window.innerHeight;-->
<!--  camera.updateProjectionMatrix();-->
<!--  renderer.setSize(window.innerWidth, window.innerHeight);-->
<!--  render();-->
<!--}-->

<!--function render() {-->
<!--  renderer.render(scene, camera);-->
<!--}-->
<!--</script>-->

<!--<template>-->
<!--  <div>-->
<!--    <div class="gameContainer" id="GAME-CONTAINER">-->
<!--      <h1>3D Web Contain</h1>-->
<!--      &lt;!&ndash;    <canvas ref="canvas" />&ndash;&gt;-->
<!--      &lt;!&ndash;    <button @click="game_engine">게임엔진</button>&ndash;&gt;-->
<!--      &lt;!&ndash;    <div ref="web"></div>&ndash;&gt;-->
<!--      &lt;!&ndash;      <Renderer ref="renderer2">&ndash;&gt;-->
<!--      &lt;!&ndash;        <Camera :position="{ z: 100 }" />&ndash;&gt;-->
<!--      &lt;!&ndash;        <Scene>&ndash;&gt;-->
<!--      &lt;!&ndash;          <questionLight :position="{ y: 100, z: 100 }" />&ndash;&gt;-->
<!--      &lt;!&ndash;          <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">&ndash;&gt;-->
<!--      &lt;!&ndash;            <LambertMaterial />&ndash;&gt;-->
<!--      &lt;!&ndash;          </Box>&ndash;&gt;-->
<!--      &lt;!&ndash;        </Scene>&ndash;&gt;-->
<!--      &lt;!&ndash;      </Renderer>&ndash;&gt;-->
<!--      &lt;!&ndash;      <div id="info">Infomation</div>&ndash;&gt;-->
<!--    </div>-->
<!--    <slot :fooProps="fooProps"> ddd </slot>-->
<!--  </div>-->
<!--</template>-->
