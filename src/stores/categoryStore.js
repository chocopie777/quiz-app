import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useCategoryStore = defineStore('category', () => {
  const categories = ref([])
  const isLoading = ref(false)

  async function getCategories() {
    try {
      isLoading.value = false
      const data = await fetch('https://opentdb.com/api_category.php')
      const result = await data.json()
      categories.value = result.trivia_categories
      isLoading.value = true
    } catch (e) {
      console.log(e)
    }
  }

  const categoryNameById = computed((id) => categories.value.filter(item => item.id === id))

  return {categories, getCategories, categoryNameById, isLoading}
})
