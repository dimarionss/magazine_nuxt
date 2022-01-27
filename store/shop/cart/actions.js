export default {
  async addDiscount({ commit }, code) {
    const res = await this.$axios.$post('/konnektive/coupon/query/', {
      couponCode: code,
    })
    if (res.result === 'SUCCESS') {
      commit('pushDiscount', res.message.data[0])
    }
    return res
  },
  cardImportRequest({ state }, data) {
    console.log(state, data)
    // const requestData = {
    //   firstName: req.body.params.firstName,
    //   lastName: req.body.params.lastName,
    //   emailAddress: req.body.params.emailAddress,
    //   phoneNumber: req.body.params.phoneNumber,
    //   address1: '516 Walden Dr, Beverly Hills',
    //   city: 'Los Angeles',
    //   country: 'US',
    //   postalCode: '90210',
    //   state: 'CA',
    //   billShipSame: '1',
    //   ipAddress: ipAddress,
    //   campaignId: req.body.params.campaignId,
    //   paySource: 'CREDITCARD',
    //   cardNumber: req.body.params.cardNumber,
    //   cardMonth: req.body.params.cardMonth,
    //   cardYear: req.body.params.cardYear,
    //   cardSecurityCode: req.body.params.cardSecurityCode,
    //   product1_id: req.body.params.product1_id,
    //   httpReferer: req.body.params.httpReferer,
    // }
  },
}
