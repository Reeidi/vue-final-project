import { getAllDrawingsUrl } from '@/config/constants'
import { makeGetRequest } from '@/helpers/serverCommunication'
import { useUserStore } from '@/stores/useUserStore';

export async function getAllDrawings() {
  const result = await makeGetRequest(getAllDrawingsUrl, getToken());
  return result || [];
}

export async function getDrawing(drawingId) {
  const result = await makeGetRequest(`${getAllDrawingsUrl}/${drawingId}`, getToken());
  return result || null;
}

// Don't run this before it is needed: https://pinia.vuejs.org/core-concepts/outside-component-usage.html
function getToken() {
  const userStore = useUserStore();
  return userStore.getAuthToken();
}
