<script setup>
import SearchIcon from '@/assets/search-icon.svg';
import {ref} from "vue";
import {useCategoryStore} from "@/stores/categoryStore.js";

const categoryStore = useCategoryStore()
const search = ref('')

// РЕАЛИЗОВАТЬ ОТЛОЖЕННЫЙ ЗАПРОС К АПИ и начать делать новый проект
async function categorySearchHandler() {
  await categoryStore.getCategories()
  categoryStore.getCategoriesByName(search.value)
}
</script>

<template>
  <div class="relative mt-5">
    <input type="text" class="bg-gray-200 w-full p-2 rounded-lg text-xl font-medium pl-5 text-gray-500 placeholder-gray-500 focus:outline-blue-400" placeholder="Search" v-model="search" @input="categorySearchHandler">
    <img :src="SearchIcon" alt="search icon" class="w-5 absolute top-[25%] right-5 pointer-events-none">
  </div>
</template>

<style scoped>

</style>
