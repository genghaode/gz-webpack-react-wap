export const bannerData = (state = [], action) => {
  switch (action.type) {
    case 'banner':
      return state = action.data
    default:
      return state
  }
}

export const itemListData = (state = { pageNum: 1, data: [], status: 'more' }, action) => {
  switch (action.type) {
    case 'itemListLoad':
      return state = { pageNum: state.pageNum + 1, data: state.data.concat(action.data) }
    case 'itemListNomore':
      return state = { pageNum: state.pageNum, data: state.data, status: 'nomore' }
    default:
      return state
  }
}
