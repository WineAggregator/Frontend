import { $api } from "../http";

export async function getTicket(ticketId: number) {
  const response = await $api.get(`tickets/${ticketId}`);
  return response;
}