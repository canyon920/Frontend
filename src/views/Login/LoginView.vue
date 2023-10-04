<script setup>
import ButtonComponent from "@/components/ButtonComponent";
import { inject, ref } from "vue";
import AllReady from "@/components/AllReady";
import router from "@/router";

const email = ref("");
const password = ref("");
const confirm = ref("아이디와 패스워드를 입력해주세요.");
const submitForm = () => {
  // event.preventDefault(); 위 form태그에 event Modifiers로 적용(.prevent)
  if (email.value === example[0] && password.value === password_example[0]) {
    router.push({ path: "/" });
    alert("정상저긍로 로그인이 완료되었습니다.");
  } else if (email.value !== example[0]) {
    confirm.value = "아이디가 일치하지 않습니다.";
  } else if (password.value !== password_example[0]) {
    confirm.value = "패스워드가 일치하지 않습니다.";
  }
};

const result = inject("count");

// const submit = (e) => {
//   console.log(e.target.value);
// };

const submit = (e) => {
  console.log(e);
};
const example = ["test@naver.com"];
const password_example = ["test"];
</script>

<template>
  <div class="login_container" id="LOGIN_CONTAINER">
    <ButtonComponent />
    {{ result }}
    <!--    <form @click="login" class="login_form">-->
    <form v-on:submit.prevent="submitForm">
      <div>
        <input id="username" type="text" v-model="email" />
      </div>
      <div>
        <input id="password" type="password" v-model="password" />
      </div>
      <button type="submit">login</button>
    </form>
    <div class="confirm_container">
      {{ confirm }}
    </div>
  </div>
</template>

<style>
.login_container {
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  justify-items: center;
  text-align: center;
  position: relative;
}

.login_wrap {
  margin: 0 auto;
  justify-content: center;
  justify-items: center;
  text-align: center;
}

input {
  background-color: black;
  color: white;
  border: none;
  padding: 20px;
  margin: 20px;
  border-radius: 25px;
}

input:before {
  background-color: black;
  color: white;
  border: none;
  padding: 20px;
  margin: 20px;
  border-radius: 25px;
}

input:hover {
  color: white;
  border: none;
  animation: scale_ani 1s;
  z-index: 99;
}

@keyframes scale_ani {
  0% {
    background-color: green;
  }
  100% {
    scale: 1.1;
  }
}

.login_form {
  animation: fadeIn 3s;
  z-index: 999;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#LOGIN_CONTAINER {
  animation: login_top 2s;
}

@keyframes login_top {
  0% {
    opacity: 0;
    margin-bottom: 200px;
  }
  100% {
    opacity: 1;
  }
}

.confirm_container {
  margin-top: 50px;
}
</style>
