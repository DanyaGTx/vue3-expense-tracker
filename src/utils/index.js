export const formattedCurrency = (value) => {
    if (value >= 100000) {
      return `${(value / 1000).toFixed(0)}k$`
    } else {
      return `$${value}`
    }
}