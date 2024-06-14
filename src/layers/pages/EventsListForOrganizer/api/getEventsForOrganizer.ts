import { $api } from "../../../../http";

export async function getEventsForOrganizer() {
  const response = $api.get(`events/organizer`);
  return response;
}