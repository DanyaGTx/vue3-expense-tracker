<template>
  <div
    class="flex items-center gap-[10px] bg-[#FD3C4A] pt-2 pb-2 pl-3 pr-3 rounded-3xl w-full max-w-[300px]"
  >
    <div class="min-w-[48px] h-[48px] sm:w-[64px] sm:h-[64px]">
      <img class="w-full" src="../../images/HomePage/expenses.svg" alt="" />
    </div>
    <div>
      <p class="text-sm sm:text-[22px]">Expenses</p>
      <h3 class="font-semibold text-[22px] sm:text-[32px]">
        {{ formattedCurrency(expense) }}
      </h3>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { formattedCurrency } from '../../utils/index.js'
const expense = ref(5000)
</script>
