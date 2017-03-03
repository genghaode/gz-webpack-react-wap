import axios from 'axios'

export const fetchTest = () => {
  return axios.get('localhost:9090/api/test')
}
