import {defineStore} from "pinia";
import {ref} from "vue";

export const useCategoryStore = defineStore('category', () => {
  const categories = ref([])
  const isLoading = ref(false)

  // получение всех категорий из api
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

  // получение категорий по имени
  function getCategoriesByName(name) {
    const result = categories.value.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))
    categories.value = result
  }

  return {categories, getCategories, isLoading, getCategoriesByName}
})
