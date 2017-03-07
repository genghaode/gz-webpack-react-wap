import axios from 'axios'

let url = ''
if (__DEV__) {
  url = 'http://localhost:9090'
}
if (__PROD__) {
  url = 'http://localhost:3000'
}

export const fetchTest = () => {
  return axios.get(`${url}/api/test`)
}

export const fetchBanner = () => {
  return axios.get(`${url}/api/getBanner`)
}
