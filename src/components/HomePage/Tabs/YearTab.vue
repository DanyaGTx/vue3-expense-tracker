<template>
  <CardItem
    :transaction="transaction"
    v-for="transaction in yearsTransactions"
    :key="transaction.id"
    type="shopping"
  />
</template>

<script setup>
import CardItem from './Cards/CardItem.vue'
import { computed } from 'vue'
import { useTransactionsStore } from '../../../store/allTransactions'
const transactionsStore = useTransactionsStore()

const yearsTransactions = computed(() => {
  return transactionsStore.getYearsTransactions
})
</script>
