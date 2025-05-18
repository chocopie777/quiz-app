<script setup>
import {useRoute, useRouter} from "vue-router";
import {useCategoryStore} from "@/stores/categoryStore.js";
import {computed, ref} from "vue";
import {useQuizStore} from "@/stores/quizStore.js";

const categoryStore = useCategoryStore()
const quizStore = useQuizStore()

const currentQuestionNumber = ref(1)

const route = useRoute()
const router = useRouter()
const categoryName = computed(() => categoryStore.categories.filter(item => item.id === Number(route.params.id)))

categoryStore.getCategories()
quizStore.getQuestions(route.params.id)

function nextQuestion() {
  if(quizStore.questions[currentQuestionNumber.value - 1].selectedAnswer) {
    if(currentQuestionNumber.value === quizStore.numberOfQuestions) {
      router.push('/result')
    }
    currentQuestionNumber.value++
  }
}

function previousQuestion() {
  if(currentQuestionNumber.value > 1) {
    currentQuestionNumber.value--
  }
}
</script>

<template>
  <div v-if="!quizStore.isError" class="mb-5">
    <template v-if="categoryStore.isLoading">
      <h2 class="mt-5 text-2xl font-medium text-blue-400">{{categoryName[0].name}}</h2>
    </template>
    <template v-else>
      Loading...
    </template>
    <div class="mt-5">
      <template v-if="quizStore.isLoading">
        <span class="block mb-2 text-blue-500 font-medium">Question: {{currentQuestionNumber}}/{{quizStore.numberOfQuestions}}</span>
        <h3 class="text-xl font-medium">{{quizStore.questions[currentQuestionNumber - 1].question}}</h3>
        <form class="mt-5" @submit.prevent="">
          <template v-for="item in quizStore.questions[currentQuestionNumber - 1].answers" :key="item">
            <label @click="quizStore.setSelectedAnswer(currentQuestionNumber - 1, item)">
              <input type="radio" class="w-[1px] h-[1px] overflow-hidden absolute [clip:rect(0,0,0,0)] peer" name="answer" :value="item" :checked="item === quizStore.questions[currentQuestionNumber - 1].selectedAnswer">
              <div class="text-lg ring cursor-pointer hover:text-white hover:bg-blue-300 p-2 rounded-md mb-5 peer-checked:bg-blue-400  peer-checked:ring-0 peer-checked:text-white peer-checked:hover:bg-blue-400">{{item}}</div>
            </label>
          </template>
          <div class="flex justify-end">
            <button class="bg-blue-400 text-white p-2 text-lg rounded-md mr-2 w-25 cursor-pointer hover:bg-blue-500" @click="previousQuestion">Previous</button>
            <button class="bg-blue-400 text-white p-2 text-lg rounded-md w-25 cursor-pointer hover:bg-blue-500" @click="nextQuestion">Next</button>
          </div>
        </form>
      </template>
      <template v-else>
        <div>Loading...</div>
      </template>
    </div>
  </div>
  <div v-else>
    <span>
      Произошла ошибка во время загрузки страницы, пожалуйста перезагрузите страницу.
    </span>
  </div>
</template>

<style scoped>

</style>
