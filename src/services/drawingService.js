import { getAllDrawingsUrl } from '@/config/constants'
import { makeGetRequest } from '@/helpers/serverCommunication'

export async function getAllDrawings() {
  const result = await makeGetRequest(getAllDrawingsUrl);
  return result || [];
}

export async function getDrawing(drawingId) {
  const result = await makeGetRequest(`${getAllDrawingsUrl}/${drawingId}`);
  return result || null;
}
