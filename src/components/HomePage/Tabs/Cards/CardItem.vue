<template>
  <div
    class="flex items-center gap-3 bg-[#FCFCFC] rounded-[24px] p-[15px] mb-[10px]"
  >
    <div>
      <img :src="getSuitableImage" alt="image" />
    </div>
    <div class="w-full">
      <div class="flex items-center justify-between">
        <h4 class="text-[#292B2D] text-[22px] font-medium">
          {{ capitalizeType }}
        </h4>
        <h4>- $120</h4>
      </div>
      <div class="flex items-center justify-between">
        <p class="text-[#91919F] mr-[10px]">
          {{ props.transaction.description }}
        </p>
        <p class="min-w-fit">{{ normalizeDate }}</p>
        <p class="min-w-fit">{{ calculateToNow }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { transactionTypes, imagePath } from '../../../../constants/index.js'
import { format } from 'date-fns'
import { formatDistanceToNow } from 'date-fns'
const props = defineProps({
  transaction: {
    type: String,
    price: Number,
    description: String,
    date: String,
  },
})

const getSuitableImage = computed(() => {
  switch (props.transaction.type) {
    case transactionTypes.food:
      return `${imagePath}/${transactionTypes.food}.svg`
    case transactionTypes.shopping:
      return `${imagePath}/${transactionTypes.shopping}.svg`
    case transactionTypes.subscription:
      return `${imagePath}/${transactionTypes.subscription}.svg`
  }
})

const normalizeDate = computed(() => {
  const timestamp = props.transaction.date
  const date = new Date(timestamp)
  const formattedDate = format(date, 'HH:mm yyyy/MM/dd')
  return formattedDate
})

const calculateToNow = computed(() => {
  return formatDistanceToNow(props.transaction.date)
})

const capitalizeType = computed(() => {
  return (
    props.transaction.type.charAt(0).toUpperCase() +
    props.transaction.type.slice(1)
  )
})

onMounted(() => {})
</script>
