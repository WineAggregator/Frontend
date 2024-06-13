import { getAllEvents } from "../api/getAllEvents";

export async function eventsListLoader() {
  const response = await getAllEvents();

  return response.data.events;
}