import { fetchTest, fetchBanner } from '../../utils'

export const getBannerAction = () => {
  return (dispatch, getState) => {
    fetchBanner().then((res) => {
      return dispatch({ type: "success", data: res.data.myData })
    }).catch((err) => {
      console.log(err)
    })
  }
}
