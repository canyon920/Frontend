<script setup>
import { defineProps, onMounted, ref } from "vue";

const check = ref(false);

const welcome = () => {
  check.value = !check.value;
};
// const props = defineProps({
//   amount: {
//     type: Number,
//     getContext: Number,
//     },
//   size: {
//     type: Number,
//     default: 5,
//     },
//   speed: {
//     type: Number,
//     default: 1.5,
//     },
//   wind: {
//     type: Number,
//     default: 0,
//     },
//   color: {
//     type: String,
//     default: "#fff",
//     },
//   opacity: {
//     type: Number,
//     default: 0.8,
//     },
//   swing: {
//     type: Number,
//     default: 1,
//     },
//   image: {
//     type: String,
//     default: null,
//     },
//   zIndex: {
//     type: Number,
//     default: null,
//     },
//   resize: {
//     type: Boolean,
//     default: true,
//     },
// });

const snow = ref(null);

// onMounted(() => {
//   const CANVAS = snow.value;
//   if (!CANVAS) return;
//   const CONTEXT = CANVAS.getContext("2d");
//   var canvasHeight = CANVAS.offsetHeight;
//   var canvasWidth = CANVAS.offsetWidth;
//   var flakes = [];
//
//   CANVAS.height = canvasHeight;
//   CANVAS.width = canvasWidth;
//   CANVAS.style.zIndex = this.zIndex ? this.zIndex : "auto";
//
//   init();
//   snow();
//   random();
//   function init() {
//     for (var i = 0; i < this.amount; i++) {
//       flakes.push({
//         x: random(0, canvasWidth),
//         y: random(0, canvasHeight),
//         r: random(this.size, this.size * 2) / 2,
//         velX: 0,
//         velY: random(this.speed, this.speed * 2),
//         swing: random(0, 2 * Math.PI),
//         opacity: random(0, this.opacity),
//       });
//     }
//     snow();
//   }
//
//   function snow() {
//     var img;
//     CONTEXT.clearRect(0, 0, canvasWidth, canvasHeight);
//     for (var i = 0; i < this.amount; i++) {
//       var flake = flakes[i];
//
//       if (!this.image) {
//         CONTEXT.beginPath();
//         CONTEXT.fillStyle =
//           "rgba(" + getRgb(this.color) + "," + flake.opacity + ")";
//         CONTEXT.arc(flake.x, flake.y, flake.r, 2 * Math.PI, false);
//         CONTEXT.fill();
//         CONTEXT.closePath();
//       } else {
//         if (!img) {
//           img = new Image();
//           img.src = this.image;
//         }
//         CONTEXT.drawImage(
//           img,
//           flake.x - flake.r,
//           flake.y - flake.r,
//           2 * flake.r,
//           2 * flake.r
//         );
//       }
//
//       flake.velX =
//         Math.abs(flake.velX) < Math.abs(this.wind)
//           ? flake.velX + this.wind / 20
//           : this.wind;
//       flake.y = flake.y + flake.velY * 0.5;
//       flake.x =
//         flake.x +
//         (this.swing
//           ? 0.4 * Math.cos((flake.swing += 0.03)) * flake.opacity * this.swing
//           : 0) +
//         flake.velX * 0.5;
//       if (
//         flake.x > canvasWidth + flake.r ||
//         flake.x < -flake.r ||
//         flake.y > canvasHeight + flake.r ||
//         flake.y < -flake.r
//       ) {
//         reset(flake);
//       }
//     }
//     requestAnimationFrame(snow);
//   }
//
//   function reset(flake) {
//     var prevR = flake.r;
//     flake.r = random(this.size, this.size * 2) / 2;
//     if (flake.x > canvasWidth + prevR) {
//       flake.x = -flake.r;
//       flake.y = random(0, canvasHeight);
//     } else if (flake.x < -prevR) {
//       flake.x = canvasWidth + flake.r;
//       flake.y = random(0, canvasHeight);
//     } else {
//       flake.x = random(0, canvasWidth);
//       flake.y = -flake.r;
//     }
//     flake.velX = 0;
//     flake.velY = random(this.speed, this.speed * 2);
//     flake.swing = random(0, 2 * Math.PI);
//     flake.opacity = random(0, this.opacity);
//   }
//
//   init();
//
//   if (this.resize) {
//     window.addEventListener("resize", function () {
//       var H0 = CANVAS.height,
//         W0 = CANVAS.width,
//         H1 = CANVAS.offsetHeight,
//         W1 = CANVAS.offsetWidth;
//
//       CANVAS.height = canvasHeight = H1;
//       CANVAS.width = canvasWidth = W1;
//       for (var i = 0; i < this.amount; i++) {
//         var flake = flakes[i];
//         flake.x = (flake.x / W0) * W1;
//         flake.y = (flake.y / H0) * H1;
//       }
//     });
//   }
//
//   function random(min, max) {
//     var delta = max - min;
//     return max === min ? min : Math.random() * delta + min;
//   }
//
//   function getRgb(str) {
//     var rgb = "";
//     if (str.indexOf("#") === 0) {
//       rgb =
//         str.length === 4
//           ? str
//               .substr(1)
//               .split("")
//               .map(function (n) {
//                 return parseInt(n.concat(n), 16);
//               })
//               .join(",")
//           : str.length === 7
//           ? [str.substr(1, 2), str.substr(3, 2), str.substr(5, 2)]
//               .map(function (n) {
//                 return parseInt(n, 16);
//               })
//               .join(",")
//           : "255,255,255";
//     } else if (str.indexOf("rgb(") === 0) {
//       rgb = str.substring(4, str.length - 1);
//     } else {
//       rgb = "255,255,255";
//     }
//     return rgb;
//   }
// });
// const props = defineProps([]);
</script>

<template>
  <div>
    <div class="right_container">
      <div class="night_gallery">
        <!--        <canvas class="snowf-canvas" ref="snow"></canvas>-->
        <div>
          <section>
            <div class="section_container">
              <div class="section_wrap">
                <h1 @click="welcome" class="context_pointer">Context</h1>
                <br /><br /><br />
                <p>About Context</p>
              </div>
            </div>
          </section>
          <Transition>
            <div class="modal_container" v-if="check">
              <div class="modal_wrap">
                <h1>About</h1>
                <br /><br /><br />
                <p class="profile_context">
                  안녕하세요. 프론트엔드 개발자 김동원 입니다. 3D 게임을 제작
                  <br />
                  솔루션, 삼성 자동화 시스템 선행개발, SONO 호텔 리뉴얼 등의
                  업무
                  <br />
                  경험이 있습니다.
                  <br />
                </p>
                <br /><br /><br /><br />
                <button @click="welcome" class="button_class">닫기</button>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./public/style/Context.scss";
</style>
