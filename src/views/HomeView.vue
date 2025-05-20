<script setup>
import {useCategoryStore} from "@/stores/categoryStore.js";
import CategorySearch from "@/components/CategorySearch.vue";

const categoryStore = useCategoryStore()

// получение категорий
categoryStore.getCategories()
</script>

<template>
  <CategorySearch />
  <h2 class="mt-5 text-2xl font-medium text-blue-400">Choose Category</h2>
  <div v-if="categoryStore.isLoading" class="mb-5">
    <div class="flex flex-wrap gap-3 mt-5 mb-5 justify-center">
      <template v-for="item in categoryStore.categories" :key="item.id">
        <RouterLink :to="`/quiz/${item.id}`" class="w-60 min-h-25 bg-gray-200 text-gray-600 rounded-2xl flex justify-center items-center hover:bg-blue-400 hover:text-white cursor-pointer transition duration-100 ease-in p-5 focus:outline-blue-400 ">
          <span class="text-2xl font-medium pointer-events-none wrap-anywhere">{{item.name}}</span>
        </RouterLink>
      </template>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<style scoped>

</style>
