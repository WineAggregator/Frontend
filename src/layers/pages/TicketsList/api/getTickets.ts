import { $api } from "../../../../http";

export async function getTickets() {
  const response = await $api.get(`tickets`);
  return response;
}