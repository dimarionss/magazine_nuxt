export default {
  updateUsersInformation(state, users) {
    state.users.splice(
      0,
      state.users.length,
      ...users.map((user) => {
        return { ...user }
      })
    )
  },
  removeDiscount(state, index) {
    state.discounts.splice(index, 1)
  },
  updateDiscount(state, payload) {
    state.discounts.splice(payload.index, 1, payload.data)
  },
  pushDiscount(state, discount) {
    state.discounts.push(discount)
  },
}
