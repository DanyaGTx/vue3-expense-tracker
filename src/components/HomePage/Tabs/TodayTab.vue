<template>
  <CardItem
    :transaction="transaction"
    v-for="transaction in todaysTransactions"
    :key="transaction.id"
    type="shopping"
  />
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { isToday } from 'date-fns'
import CardItem from './Cards/CardItem.vue'
import { useTransactionsStore } from '../../../store/allTransactions'
const transactionsStore = useTransactionsStore()

const todaysTransactions = computed(() => {
  return transactionsStore.getTodaysTransactions
})

onMounted(() => {
  console.log('Store', transactionsStore.getAllTransactions)
})
</script>
