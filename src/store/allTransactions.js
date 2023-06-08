import { defineStore } from 'pinia'
import { isToday, differenceInWeeks, differenceInMonths } from 'date-fns'
export const useTransactionsStore = defineStore('transactions', {
    state: () => {
        return {
            allTransactions: [
                {
                  id: 0,
                  type: 'shopping',
                  description: 'Bought new T-shirt',
                  price: 13.9,
                  date: 1686139748710,
                },
                {
                  id: 1,
                  type: 'food',
                  description: 'Buy some cucumbers',
                  price: 11.5,
                  date: 1686139748710,
                },
                {
                  id: 2,
                  type: 'subscription',
                  description: 'Spotify subscription',
                  price: 3,
                  date: 1686208779416,
                },
                {
                  id: 3,
                  type: 'subscription',
                  description: 'One Week Ago',
                  price: 3,
                  date: 1688158800000,
                },
                {
                  id: 4,
                  type: 'subscription',
                  description: 'One Week Ago',
                  price: 4,
                  date: 1688158300000,
                },
                {
                  id: 5,
                  type: 'subscription',
                  description: 'More than one Month Ago',
                  price: 4,
                  date: 1678128300000,
                },
                {
                  id: 6,
                  type: 'subscription',
                  description: 'More than one Month Ago',
                  price: 4,
                  date: 1578128300000,
                },
                {
                  id: 7,
                  type: 'subscription',
                  description: 'More than one Month Ago',
                  price: 4,
                  date: 1378128300000,
                },
            ]
        }
    },
    getters: {
      getAllTransactions: (state) => state.allTransactions,
      getTodaysTransactions: (state) => state.allTransactions.filter((transaction) => isToday(transaction.date)),
      getWeeksTransactions: (state) => state.allTransactions.filter(
        (transaction) =>
          Math.abs(
            differenceInWeeks(new Date().getTime(), new Date(transaction.date))
          ) <= 1
      ),
      getMonthsTransactions: (state) => state.allTransactions.filter((transaction) =>
        Math.abs(
          differenceInMonths(new Date().getTime(), new Date(transaction.date)) <= 1
        )
      ),
      getYearsTransactions: (state) => state.allTransactions.filter(
        (transaction) =>
          Math.abs(
            differenceInMonths(new Date().getTime(), new Date(transaction.date))
          ) >= 0
      )
    },

    actions: {
      addNewTransaction(newTransaction) {
        this.allTransactions.unshift(newTransaction)
      }
    }
  })