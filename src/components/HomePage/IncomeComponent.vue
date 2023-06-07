<template>
  <div
    class="flex items-center gap-[10px] bg-[#00A86B] pt-2 pb-2 pl-3 pr-3 rounded-3xl w-full max-w-[300px]"
  >
    <div class="w-[48px] h-[48px] sm:w-[64px] sm:h-[64px]">
      <img class="w-full" src="../../images/HomePage/income.svg" alt="" />
    </div>
    <div>
      <p class="text-sm sm:text-[22px]">Income</p>
      <h3 class="font-semibold text-[22px] sm:text-[32px]">
        {{ formattedCurrency(income) }}
      </h3>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { formattedCurrency } from '../../utils/index.js'
const income = ref(5000)
</script>
