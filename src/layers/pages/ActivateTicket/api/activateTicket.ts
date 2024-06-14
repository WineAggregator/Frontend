import { $api } from "../../../../http";

export async function activateTicket(ticketId: number) {
  const response = await $api.get(`tickets/${ticketId}/activate`);
  return response;
}