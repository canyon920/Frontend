<script setup>
import { defineProps, ref } from "vue";

// const props = defineProps({
//   questions: Object,
//   answers: Object,
// });

const questions = [
  { id: 1, question: "Question"  checter: "" },
  { id: 2, question: "Question2"  checter: "" },
  { id: 3, question: "Question3"  checter: "" },
];

let question_clear = ref([]);

questions.map((quest, index) => {
  let data = Object.values(quest.question);
  question_clear.value.push(data.join(""));
});

const answers = [
  { id: 1, question: "Answer"  checter: "" },
  { id: 2, question: "Answer2"  checter: "" },
  { id: 3, question: "Answer3"  checter: "" },
];

const submit = () => {
  shuffle_question();
  shuffle_answer();
};

const shuffle_question = () => {
  for (let i = 0; i < questions.length; i++) {
    const random_index = Math.floor(Math.random() * (questions.length - i));
    const temp = questions[i];
    questions[i] = questions[random_index];
    questions[random_index] = temp;
  }
};

const shuffle_answer = () => {
  for (let i = 0; i < answers.length; i++) {
    const random_index = Math.floor(Math.random() * (answers.length - i));
    const temp = answers[i];
    answers[i] = answers[random_index];
    answers[random_index] = temp;
  }
};
</script>

<template>
  <div class="game_container">
    <div class="question_container">
      <ul class="question_unline">
        <li
          class="quesiton_list"
          v-for="question in question_clear"
          :key="question.id"
        >
          <div class="question_block">
            {{ question }}
          </div>
        </li>
      </ul>
    </div>
    {{ answers[1] }}
    <form @submit.prevent>
      <button @click="submit">게임 시작</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.question_container {
  max-width: 1920px;
  width: 100%;
  border-radius: 50px;
  .question_unline {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .quesiton_list {
    max-width: 200px;
    margin: 0 20px;
  }
  .question_block {
    width: 200px;
    height: 200px;
    line-height: 200px;
    background-color: orange;
    border-radius: 25px;
    border: 5px solid green;
    //background: linear-gradient(45deg, #ff7513, #ff7513, #3f7953, #ff7513);
    //-webkit-text-fill-color: transparent;
    //border-radius: 25px;
  }
  .question_text {
    color: white;
  }
}
</style>
