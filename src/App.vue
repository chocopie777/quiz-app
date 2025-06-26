<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Header/>
    <main class="grow-1">
    <div class="max-w-[1200px] ml-auto mr-auto pl-[15px] pr-[15px] overflow-hidden">
      <RouterView />
    </div>
  </main>
  <Footer/>
</template>

<style scoped>

</style>
