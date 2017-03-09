import { fetchLogin } from '../../utils'

export const postLoginAction = (cb) => {
  return (dispatch, getState) => {
    fetchLogin({ name: getState().name, pwd: getState().pwd }).then((res) => {
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
