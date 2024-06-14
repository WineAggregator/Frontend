import { $api } from "../http";

export async function buyTicket(eventId: number) {
  const response = await $api.post(`tickets`, JSON.stringify({eventId: eventId}));
  return response;
}