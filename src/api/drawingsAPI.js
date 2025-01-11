import { getAllDrawingsUrl } from '@/config/constants'
import axiosAS from '../config/axiosAS'

export async function getAllDrawings() {
  try {
    const res = await axiosAS.get(getAllDrawingsUrl)
    return res.data
  } catch (e) {
    return []
  }
}
