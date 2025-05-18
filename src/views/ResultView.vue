<script setup>
import {useQuizStore} from "@/stores/quizStore.js";

const quizStore = useQuizStore()
</script>

<template>
  <div class="flex flex-col items-center mt-20">
    <div class="flex justify-center flex-col items-center bg-blue-400 w-100 h-100 text-white font-medium rounded-[50%] border-20 border-blue-300">
      <span class="text-4xl mb-3">Your Score</span>
      <span class="text-5xl">{{quizStore.correctAnswersCount}}/{{quizStore.numberOfQuestions}}</span>
    </div>
    <span class="text-blue-400 text-5xl font-medium mt-10">Congratulation</span>
    <span class="mt-3 text-blue-400 text-2xl">Great job! You did it</span>
    <RouterLink to="/">
      <button class="bg-blue-400 text-white text-2xl w-100 py-2 rounded-md mt-20 cursor-pointer font-medium hover:bg-blue-500">Back to Home</button>
    </RouterLink>
  </div>
</template>

<style scoped>

</style>
