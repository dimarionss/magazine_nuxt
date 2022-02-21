export default {
  stateAuth(state, param) {
    state.auth = param
    localStorage.user = param
  },
  uploadAdv(state, param) {
    state.advertising = param
  }
}
