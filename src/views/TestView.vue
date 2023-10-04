<script setup></script>
<template>
  <div>Test view</div>
</template>
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
