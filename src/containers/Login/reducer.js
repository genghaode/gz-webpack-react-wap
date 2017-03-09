export const loginStatus = (state = sessionStorage.getItem('loginStatus'), action) => {
  switch (action.type) {
    case 'loginSeccess':
      return state = 1
    case 'loginError':
      return state = 0
    default:
      return state
  }
}
