import axios from 'axios'

export const fetchTest = () => {
  return axios.get('localhost:9090/api/test')
}

export const fetchBanner = () => {
  return axios.get('localhost:9090/api/getBanner')
}
