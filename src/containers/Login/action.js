import { fetchLogin } from '../../utils'

export const postLoginAction = (cb, obj) => {
  return (dispatch, getState) => {
    fetchLogin(obj).then((res) => {
      cb(res.data.myData.status)
      if (res.data.myData.status == true) {
        return dispatch({ type: "loginSeccess" })
      } else {
        return dispatch({ type: "loginError" })
      }

    }).catch((err) => {
      console.log(err)
    })
  }
}
