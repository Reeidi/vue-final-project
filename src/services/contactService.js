import { contactUrl } from "@/config/constants";
import { makePostRequest } from "@/helpers/serverCommunication";

export async function sendContactMessage(messageData) {
  const result = await makePostRequest(contactUrl, messageData);
  return result?.success || false;
}
