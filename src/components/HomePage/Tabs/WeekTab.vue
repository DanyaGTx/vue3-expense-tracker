<template>
  <CardItem
    :transaction="transaction"
    v-for="transaction in weeksTransactions"
    :key="transaction.id"
    type="shopping"
  />
</template>

<script setup>
import { computed } from 'vue'
import CardItem from './Cards/CardItem.vue'
import { useTransactionsStore } from '../../../store/allTransactions'
const transactionsStore = useTransactionsStore()
const weeksTransactions = computed(() => {
  return transactionsStore.getWeeksTransactions
})
</script>
