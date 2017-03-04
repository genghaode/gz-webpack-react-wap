export const bannerData = (state = [], action) => {
  switch (action.type) {
    case 'success':
      return state = action.data
    default:
      return state
  }
}
