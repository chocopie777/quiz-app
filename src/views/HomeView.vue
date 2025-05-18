<script setup>
import {useCategoryStore} from "@/stores/categoryStore.js";

const store = useCategoryStore()

store.getCategories()
</script>

<template>
  <div>
    <h2 class="mt-5 text-2xl font-medium text-blue-400">Choose Category</h2>
    <div class="flex flex-wrap gap-3 mt-5">
      <template v-for="item in store.categories" :key="item.id">
        <RouterLink :to="`/quiz/${item.id}`">
          <div class="w-60 min-h-25 bg-gray-200 text-gray-600 rounded-2xl flex justify-center items-center hover:bg-blue-400 hover:text-white cursor-pointer transition duration-100 ease-in p-5">
            <span class="text-2xl font-medium pointer-events-none wrap-anywhere">{{item.name}}</span>
          </div>
        </RouterLink>
      </template>
    </div>
  </div>
</template>

<style scoped>

</style>
