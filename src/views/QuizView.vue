<script setup>
import {useRoute, useRouter} from "vue-router";
import {useCategoryStore} from "@/stores/categoryStore.js";
import {computed, ref} from "vue";
import {useQuizStore} from "@/stores/quizStore.js";

const categoryStore = useCategoryStore()
const quizStore = useQuizStore()

const currentQuestionNumber = ref(1)
const transitionName = ref('slide-next')
const isError = ref(false)

const route = useRoute()
const router = useRouter()
// вычисление названия категории по id
const categoryNameById = computed(() => categoryStore.categories.filter(item => item.id === Number(route.params.id)))

categoryStore.getCategories()
quizStore.getQuestions(route.params.id)

function nextQuestion() {
  transitionName.value = 'slide-next'
  if(quizStore.questions[currentQuestionNumber.value - 1].selectedAnswer) {
    isError.value = false
    if(currentQuestionNumber.value === quizStore.numberOfQuestions) {
      router.push('/result')
    }
    currentQuestionNumber.value++
  } else {
    isError.value = true
  }
}

function previousQuestion() {
  transitionName.value = 'slide-prev'
  if(currentQuestionNumber.value > 1) {
    currentQuestionNumber.value--
  }
  isError.value = false
}
</script>

<template>
  <div v-if="!quizStore.isError" class="mb-5">
    <template v-if="categoryStore.isLoading">
      <h2 class="mt-5 text-2xl font-medium text-blue-400">{{categoryNameById[0].name}}</h2>
    </template>
    <template v-else>
      Loading...
    </template>
    <div class="mt-5">
      <template v-if="quizStore.isLoading">
      <span class="block mb-2 text-blue-500 font-medium">Question: {{currentQuestionNumber}}/{{quizStore.numberOfQuestions}}</span>
        <div class="flex">
          <Transition :name="transitionName" mode="out-in">
            <div class="w-full" :key="currentQuestionNumber">
              <h3 v-html="quizStore.questions[currentQuestionNumber - 1].question" class="text-xl font-medium"></h3>
              <form class="mt-5 flex flex-col" @submit.prevent="">
                <template v-for="item in quizStore.questions[currentQuestionNumber - 1].answers" :key="item">
                  <label @click="quizStore.setSelectedAnswer(currentQuestionNumber - 1, item)">
                    <input type="radio" class="w-[1px] h-[1px] overflow-hidden absolute [clip:rect(0,0,0,0)] peer" name="answer" :value="item" :checked="item === quizStore.questions[currentQuestionNumber - 1].selectedAnswer">
                    <div v-html="item" class="text-lg ring cursor-pointer hover:text-white hover:bg-blue-300 hover:ring-blue-300 p-2 rounded-md mb-5 peer-checked:bg-blue-400 peer-checked:ring-blue-400 peer-checked:text-white peer-checked:hover:bg-blue-400 peer-checked:hover:ring-blue-400" @click="isError = false"></div>
                  </label>
                </template>
              </form>
            </div>
          </Transition>
        </div>
        <Transition name="error-slide">
          <div v-show="isError" class="bg-red-500 p-2 rounded-md mb-5">
            <span class="text-white font-medium text-lg">error: choose answer</span>
          </div>
        </Transition>
        <div class="flex justify-end">
          <button class="bg-blue-400 text-white p-2 text-lg rounded-md mr-2 w-25 cursor-pointer hover:bg-blue-500 disabled:bg-gray-400" @click="previousQuestion" :disabled="currentQuestionNumber == 1">Previous</button>
          <button class="bg-blue-400 text-white p-2 text-lg rounded-md w-25 cursor-pointer hover:bg-blue-500" @click="nextQuestion">Next</button>
        </div>
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
/* Анимация перехода вперед */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: all 0.3s ease;
}

.slide-next-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-next-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
/* Анимация перехода назад */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: all 0.3s ease;
}

.slide-prev-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-prev-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
/* Анимация ошибки */
.error-slide-enter-active {
  transition: all 0.3s ease-out;
}
.error-slide-leave-active {
  transition: all 0.3s ease-in;
}
.error-slide-enter-from,
.error-slide-leave-to {
  opacity: 0;
}
</style>
