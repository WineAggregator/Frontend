import { $api } from "../http";

export async function getEventsByTicketsUser() {
  const response = await $api.get(`events/user`);
  return response;
}