import { $api } from "../../../../http";

export async function checkOrganizer(ticketId: number) {
  const response = await $api.get(`tickets/${ticketId}/check/organizer`);
  return response;
}