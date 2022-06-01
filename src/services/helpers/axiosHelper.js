import axios from 'axios'
import { API_URL } from '../constants/App'

export const errorHandler = (rej) => {
  switch (rej.response?.status) {
    case 401:
      return `${rej.response?.data?.message}`
    case 404:
      return `${rej.response?.data?.message}`
    case 405:
      return `${rej.response?.data?.message}`
    case 500:
      return `${rej.response?.data?.message}`
    case 502:
      return `${rej.response?.data?.message}`
    default:
      return 'Something went wrong'
  }
}

export const customAxios = axios.create(
  { baseURL: API_URL },
  {
    headers: {
      'Content-Type': 'application/json'
    }
  }
)
customAxios.interceptors.request.use((req) => {
  if (req.url !== ('/login' || '/register')) {
    req.headers = {
      ...req.headers,
      Authorization: `Bearer ${localStorage.getItem('user-token')}`,
      'Access-Control-Allow-Origin': '*'
    }
  }
  return req
})

customAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorDescription = errorHandler(error)
    return Promise.reject(errorDescription)
  }
)
