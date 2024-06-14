import { getEventsForOrganizer } from "../api/getEventsForOrganizer";

export async function eventsListForOrganizerLoader() {
  const response = await getEventsForOrganizer();
  return response.data.events;
}