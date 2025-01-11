import axios from 'axios'
import { baseUrl } from './constants'

const axiosAS = axios.create({
  baseURL: baseUrl,
})

export default axiosAS
