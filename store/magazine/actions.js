export default {
  async authAdmin({
    commit
  }, data) {
    const res = await this.$axios.$post('', {
      couponCode: data,
    })
    if (res === 'true') {
      commit('stateAuth', true)
    }

    return res
  },
  async addAdvertising({
    commit
  }, data) {
    const res = await this.$axios.$post('', {
      couponCode: data,
    })
    if (res === 'true') {
      commit('uploadAdv', data)
    }
    return res
  },
  async getAdvertising({
    commit
  }, data) {
    const res = await this.$axios.$get('', {
      couponCode: data,
    })
    if (res === 'true') {
      commit('uploadAdv', data)
    }
    return res
  },
  async deleteAvertising({
    commit
  }, data) {
    const res = await this.$axios.$post('', {
      couponCode: data,
    })
    if (res === 'true') {
      commit('uploadAdv', data)
    }
    return res
  },
}
