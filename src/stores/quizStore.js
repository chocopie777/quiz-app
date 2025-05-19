import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {shuffle} from "@/utils/shuffle.js";

export const useQuizStore = defineStore('quiz', () => {
  const questions = ref([])
  const isLoading = ref(false)
  const isError = ref(false)
  // получение списка вопросов по id категории из api
  async function getQuestions(categoryId) {
    try {
      isError.value = false
      isLoading.value = false
      const data = await fetch(`https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=easy&type=multiple`)
      const result = await data.json()
      let doneResult = []
      let counter = 0

      for(let item of result.results) {
        doneResult.push({
          id:  counter++,
          question: item.question,
          correctAnswer: item.correct_answer,
          answers: shuffle([item.correct_answer, ...item.incorrect_answers]),
          selectedAnswer: '',
        })
      }
      questions.value = doneResult
      isLoading.value = true
    } catch (e) {
      console.log(e)
      isError.value = true
    }
  }
  // сохранить выбранный ответ на вопрос
  function setSelectedAnswer(id, selectedAnswer) {
    questions.value[id].selectedAnswer = selectedAnswer
  }

  // вычисление количества вопросов
  const numberOfQuestions = computed(() => questions.value.length)

  // вычисление количества правильных ответов
  const correctAnswersCount = computed(() => {
    let correctCount = 0
    for(let item of questions.value) {
      if(item.correctAnswer === item.selectedAnswer) correctCount++
    }
    return correctCount;
  })

  return {questions, getQuestions, isLoading, isError, numberOfQuestions, setSelectedAnswer, correctAnswersCount}
})
