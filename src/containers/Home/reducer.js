export const test1 = (state = 0, action) => {
  switch (action.type) {
    case 'add':
      return state = state + 1
    default:
      return state
  }
}

export const test2 = (state = 0, action) => {
  switch (action.type) {
    case 'minus':
      return state = state - 1
    default:
      return state
  }
}
