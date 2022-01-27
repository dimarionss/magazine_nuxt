export default {
  async addDiscounts({ commit, getters }, code) {
    if (!code) return
    try {
      // Check coupon
      const res = await this.$axios.$post('/konnektive/coupon/query/', {
        couponCode: code,
      })
      if (res.result !== 'SUCCESS') return res
      // Calculate discount sum
      const discountSum = await this.$axios.$post('/konnektive/order/coupon/', {
        ...getters.GET_KONNECTIVE_PRODUCTS,
        couponCode: code,
      })
      if (
        discountSum.result === 'SUCCESS' &&
        discountSum.message.priceDiscount !== 0
      ) {
        commit('pushDiscount', {
          ...res.message.data[0],
          ...discountSum.message,
        })
      }
      return discountSum
    } catch (e) {
      return e
    }
  },
  async updateDiscounts({ commit, getters }) {
    try {
      // Calculate discount sum
      const discountSum = await this.$axios.$post('/konnektive/order/coupon/', {
        ...getters.GET_KONNECTIVE_PRODUCTS,
        couponCode: getters.GET_CHECKOUT_DISCOUNTS[0].couponCode,
      })
      if (
        discountSum.result === 'SUCCESS' &&
        discountSum.message.priceDiscount !== 0
      ) {
        commit('updateDiscount', {
          index: 0,
          data: {
            ...getters.GET_CHECKOUT_DISCOUNTS[0],
            ...discountSum.message,
          },
        })
      } else {
        commit('removeDiscount', 0)
      }
      return discountSum
    } catch (e) {
      return e
    }
  },
  async cardRequest({ getters }, data) {
    const user = getters.GET_CHECKOUT_USERS[0]
    try {
      // request to "Import Order"
      const requestData = {
        firstName: user?.checkout_first_name,
        lastName: user?.checkout_last_name,
        emailAddress: user?.checkout_email,
        phoneNumber: user?.checkout_phone,
        address1: '516 Walden Dr, Beverly Hills',
        city: 'Los Angeles',
        country: 'US',
        postalCode: '90210',
        state: 'CA',
        billShipSame: '1',
        paySource: 'CREDITCARD',
        cardNumber: data?.checkout_card_number,
        cardMonth: data?.checkout_card_expiration_date.slice(0, 2),
        cardYear: data?.checkout_card_expiration_date.slice(2),
        cardSecurityCode: data?.checkout_card_secure_code,
        custom_tickets_info: JSON.stringify(getters.GET_CHECKOUT_USERS),
        couponCode: getters.GET_CHECKOUT_DISCOUNTS[0],
        ...getters.GET_KONNECTIVE_PRODUCTS,
      }
      return await this.$axios.$post('/konnektive/order/import/', requestData)
    } catch (e) {
      return e
    }
  },
  async payPalRequest({ getters }) {
    const user = getters.GET_CHECKOUT_USERS[0]
    try {
      // request to "Import Click"
      const requestDataForClick = {
        pageType: 'checkoutPage',
        requestUri: window.location.href,
      }
      const importClick = await this.$axios.$post(
        '/konnektive/landers/import/',
        requestDataForClick
      )
      // request to "Import Lead"
      const requestDataForLead = {
        firstName: user?.checkout_first_name,
        lastName: user?.checkout_last_name,
        emailAddress: user?.checkout_email,
        phoneNumber: user?.checkout_phone,
        address1: '516 Walden Dr, Beverly Hills',
        city: 'Los Angeles',
        country: 'US',
        postalCode: '90210',
        state: 'CA',
        billShipSame: '1',
        sessionId: importClick.message.session,
      }
      const importLead = await this.$axios.$post(
        '/konnektive/leads/import/',
        requestDataForLead
      )
      // request to "Import Order"
      const requestDataForOrder = {
        sessionId: importClick.message.session,
        orderId: importLead.message.orderId,
        paypalBillerId: 2,
        paySource: 'PAYPAL',
        salesUrl: window.location.href,
        redirectsTo: window.location.href,
        errorRedirectsTo: window.location.href,
        couponCode: getters.GET_CHECKOUT_DISCOUNTS[0],
        ...getters.GET_KONNECTIVE_PRODUCTS,
      }

      return await this.$axios.$post(
        '/konnektive/order/import/',
        requestDataForOrder
      )
    } catch (e) {
      return e
    }
  },
}
