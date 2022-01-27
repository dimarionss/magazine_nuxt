export default {
  updateUserInformation(state, params) {
    if (!Object.hasOwnProperty.call(state.user, params.path)) {
      throw new TypeError(
        `The key '${params.path}' doesn't exist in main object`
      )
    } else if (!(typeof params.data === typeof state.user[params.path])) {
      throw new TypeError(
        `The type of new value for key '${params.path}' doesn't match the type in the main object`
      )
    }
    switch (typeof params.data) {
      case 'object':
        if (Array.isArray(params.data)) {
          if (!Array.isArray(state.user[params.path])) {
            throw new TypeError(
              `The type of new value for key '${params.path}' doesn't match the type in the main object`
            )
          }
          state.user[params.path] = [...params.data]
        } else {
          state.user[params.path] = {
            ...state.user[params.path],
            ...params.data,
          }
        }
        break
      default:
        state.user[params.path] = params.data
    }
  },
}
