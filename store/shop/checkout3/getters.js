export default {
  GET_CHECKOUT_USERS: (state) => {
    return state.users
  },
  GET_CHECKOUT_PRODUCTS: (state) => {
    return state.products
  },
  GET_KONNECTIVE_PRODUCTS: (state) => {
    const cartQty = {}
    let count = 0
    const KonnectiveProducts = {}

    state.users.forEach((user) => {
      cartQty[user.product_id]
        ? ++cartQty[user.product_id]
        : (cartQty[user.product_id] = 1)
    })
    for (const key in cartQty) {
      ++count
      KonnectiveProducts[`product${count}_id`] = key
      KonnectiveProducts[`product${count}_qty`] = cartQty[key]
    }

    return KonnectiveProducts
  },
  GET_CHECKOUT_DISCOUNTS: (state) => {
    return state.discounts
  },
}
