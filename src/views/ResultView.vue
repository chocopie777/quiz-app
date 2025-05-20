<script setup>
import {useQuizStore} from "@/stores/quizStore.js";

const quizStore = useQuizStore()
</script>

<template>
  <div class="flex flex-col items-center mt-20">
    <div class="flex justify-center flex-col items-center bg-blue-400 max-w-100 w-full h-full max-h-100 aspect-square text-white font-medium rounded-[50%] border-20 border-blue-300">
      <span class="text-4xl mb-3">Your Score</span>
      <span class="text-5xl">{{quizStore.correctAnswersCount}}/{{quizStore.numberOfQuestions}}</span>
    </div>
    <span class="text-blue-400 text-5xl font-medium mt-10">Congratulation</span>
    <span class="mt-3 text-blue-400 text-2xl">Great job! You did it</span>
    <RouterLink to="/" class="flex justify-center bg-blue-400 text-white text-2xl w-full max-w-100 mb-5 py-2 rounded-md mt-20 cursor-pointer font-medium hover:bg-blue-500">
      Back to Home
    </RouterLink>
  </div>
</template>

<style scoped>

</style>
