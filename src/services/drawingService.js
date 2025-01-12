import { getAllDrawingsUrl } from '@/config/constants'
import axiosAS from '../config/axiosAS'

export async function getAllDrawings() {
  try {
    const res = await axiosAS.get(getAllDrawingsUrl)
    return res.data
  } catch (e) {
    console.error('ERROR', e)
    return []
  }
}

export async function getDrawing(drawingId) {
  try {
    const res = await axiosAS.get(`${getAllDrawingsUrl}/${drawingId}`)
    return res.data
  } catch (e) {
    console.error('ERROR', e)
    return []
  }
}
