export default {
  async authAdmin({
    commit
  }, data) {
    const res = await this.$axios.$post('/api/login', {
      email: data.email,
      password: data.password,
    })
    console.log(res)
    if (res.type === "success") {
      commit('stateAuth', true)
    }

    return res
  },
  async addAdvertising({
    commit
  }, data) {
    const res = await this.$axios.$post('/api/add_adverising', {
      title: data.title,
      img: data.img,
      text: data.text,
      phone: data.phone,
      sale: data.sale,
      adress: data.adress,
      instagram: data.instagram,
      facebook: data.facebook,
      tiktok: data.tiktok,
      telegram: data.telegram,
      site: data.site,

    })
    console.log(res)
    if (res.type === 'success') {
      commit('uploadAdv', res.advertising)
    }
    return res
  },
  async getAdvertising({
    commit
  }) {
    const res = await this.$axios.$get('/api/add_adverising')
    if (res.type === 'success') {
      commit('uploadAdv', res.advertising)
    }
    return res
  },
  async deleteAvertising({
    commit
  }, data) {
    const res = await this.$axios.$post('', {
      couponCode: data,
    })
    if (res.type === 'success') {
      commit('uploadAdv', res.advertising)
    }
    return res
  },
}
