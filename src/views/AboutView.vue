<script setup>
import { ref } from "vue";

const questions = ref([
  { id: 1, name: "question" },
  { id: 2, name: "question2" },
  { id: 3, name: "question3" },
]);

const answers = ref([
  { id: 1, name: "answer" },
  { id: 2, name: "answer2" },
  { id: 3, name: "answer3" },
]);

for (let i = 0; i < questions.value.length; i++) {
  console.log("나", questions.value[i]);
  const random_index = Math.floor(Math.random() * (questions.value.length - i));
  const temp = questions.value[i];
  questions.value[i] = questions[random_index];
  questions.value[random_index] = temp;
}

// const shuffle_question = () => {
//   for (let i = 0; i < questions.value.length; i++) {
//     const random_index = Math.floor(
//       Math.random() * (questions.value.length - i)
//     );
//     const temp = questions[i];
//     questions[i] = questions[random_index];
//     questions[random_index] = temp;
//   }
// };

const shuffle_answer = () => {
  for (let i = 0; i < answers.value.length; i++) {
    const random_index = Math.floor(Math.random() * (answers.value.length - i));
    const temp = answers.value[i];
    answers.value[i] = answers.value[random_index];
    answers.value[random_index] = temp;
  }
};

const check = () => {
  // shuffle_question();
  shuffle_answer();
};

console.log(questions.value);
</script>

<template>
  <div class="question_container">
    <div v-for="question in questions" :key="question">
      {{ question }}
    </div>
    <ul class="question_unline">
      <li>{{ answers }}</li>
    </ul>
    <button @click="check">체크</button>
  </div>
</template>

<style></style>
