<template>
  <div
    class="flex items-center gap-3 bg-[#FCFCFC] rounded-[24px] p-[15px] mb-[10px]"
  >
    <div>
      <img :src="getSuitableImage" alt="image" />
    </div>
    <div class="w-full">
      <div class="flex items-center justify-between">
        <h4 class="text-[#292B2D] text-[22px] font-medium">Shopping</h4>
        <h4>- $120</h4>
      </div>
      <div class="flex items-center justify-between">
        <p class="text-[#91919F] mr-[10px]">Buy some grocery</p>
        <p class="min-w-fit">10:00 AM</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { transactionTypes, imagePath } from '../../../../constants/index.js'

const props = defineProps({
  type: String,
  price: Number,
  description: String,
  date: String,
})

const getSuitableImage = computed(() => {
  switch (props.type) {
    case transactionTypes.food:
      return `${imagePath}/${transactionTypes.food}.svg`
    case transactionTypes.shopping:
      return `${imagePath}/${transactionTypes.shopping}.svg`
    case transactionTypes.subscription:
      return `${imagePath}/${transactionTypes.subscription}.svg`
  }
})

onMounted(() => {
  console.log(props.type)
})
</script>
