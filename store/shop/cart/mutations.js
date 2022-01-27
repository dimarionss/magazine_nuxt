export default {
  removeDiscount(state, index) {
    state.discounts.splice(index, 1)
  },
  pushDiscount(state, discount) {
    state.discounts.push(discount)
  },
}
