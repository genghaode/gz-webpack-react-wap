import { fetchTest, fetchBanner, fetchItemList } from '../../utils'

export const getBannerAction = () => {
  return (dispatch, getState) => {
    fetchBanner().then((res) => {
      return dispatch({ type: "banner", data: res.data.myData })
    }).catch((err) => {
      console.log(err)
    })
  }
}

export const getItemListLoadAction = () => {
  return (dispatch, getState) => {
    fetchItemList(getState().itemListData.pageNum).then((res) => {
      // 根据请求回来的值，判断是否还有数据需要加载
      if (res.data.myData[0].fowllerFlag) {
        return dispatch({ type: "itemListNomore" })
      } else {
        return dispatch({ type: "itemListLoad", data: res.data.myData })
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
