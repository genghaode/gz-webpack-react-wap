import axios from 'axios'

export const fetchTest = () => {
  return axios.get('http://localhost:3000/api/test')
}

export const fetchBanner = () => {
  return axios.get('http://localhost:3000/api/getBanner')
}
