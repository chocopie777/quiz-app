<script setup>

</script>

<template>
  <div>
    <h2 class="mt-5 text-2xl font-medium text-blue-400">Category name</h2>
    <div class="mt-5">
      <span class="block mb-2 text-blue-500 font-medium">Question: 1/30</span>
      <h3 class="text-xl font-medium">Who is making the Web standards?</h3>
      <form class="mt-5">
        <label>
          <input type="radio" class="w-[1px] h-[1px] overflow-hidden absolute [clip:rect(0,0,0,0)] peer" name="answer" id="answer1">
          <div class="text-lg ring cursor-pointer hover:text-white hover:bg-blue-300 p-2 rounded-md mb-5 peer-checked:bg-blue-400  peer-checked:ring-0 peer-checked:text-white peer-checked:hover:bg-blue-400">The World Wide Web Consortium</div>
        </label>
        <label>
          <input type="radio" class="w-[1px] h-[1px] overflow-hidden absolute [clip:rect(0,0,0,0)] peer" name="answer" id="answer1">
          <div class="text-lg ring cursor-pointer hover:text-white hover:bg-blue-300 p-2 rounded-md mb-5 peer-checked:bg-blue-400  peer-checked:ring-0 peer-checked:text-white peer-checked:hover:bg-blue-400">The World Wide Web Consortium</div>
        </label>
        <label>
          <input type="radio" class="w-[1px] h-[1px] overflow-hidden absolute [clip:rect(0,0,0,0)] peer" name="answer" id="answer1">
          <div class="text-lg ring cursor-pointer hover:text-white hover:bg-blue-300 p-2 rounded-md mb-5 peer-checked:bg-blue-400  peer-checked:ring-0 peer-checked:text-white peer-checked:hover:bg-blue-400">The World Wide Web Consortium</div>
        </label>
        <label>
          <input type="radio" class="w-[1px] h-[1px] overflow-hidden absolute [clip:rect(0,0,0,0)] peer" name="answer" id="answer1">
          <div class="text-lg ring cursor-pointer hover:text-white hover:bg-blue-300 p-2 rounded-md mb-5 peer-checked:bg-blue-400  peer-checked:ring-0 peer-checked:text-white peer-checked:hover:bg-blue-400">The World Wide Web Consortium</div>
        </label>
        <div>
          <button class="bg-blue-400 text-white p-2 text-lg rounded-md mr-2 w-25 cursor-pointer hover:bg-blue-500">Previous</button>
          <RouterLink to="/result">
            <button class="bg-blue-400 text-white p-2 text-lg rounded-md w-25 cursor-pointer hover:bg-blue-500">Next</button>
          </RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>
