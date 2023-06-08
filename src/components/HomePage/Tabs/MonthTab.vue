<template>
  <CardItem
    :transaction="transaction"
    v-for="transaction in monthsTransactionsArray"
    :key="transaction.id"
    type="shopping"
  />
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { useTransactionsStore } from '../../../store/allTransactions'
const transactionsStore = useTransactionsStore()
const monthsTransactionsArray = ref()

const monthsTransactions = computed(() => {
  return transactionsStore.getMonthsTransactions
})
onMounted(() => {
  monthsTransactionsArray.value = monthsTransactions.value
  console.log(monthsTransactions.value)
})
</script>
