import axios from 'axios'

export const fetchTest = () => {
  return axios.get('http://localhost:3000/api/test')
}

export const fetchBanner = () => {
  return axios.get('http://localhost:3000/api/getBanner')
}

export const fetchItemList = (pageNum) => {
  return axios.get(`http://localhost:3000/api/getItemList?pageNum=${pageNum}`)
}

export const fetchLogin = (obj) => {
  return axios.post('http://localhost:3000/api/postLogin', { 'name': obj.name, 'pwd': obj.pwd })
}
