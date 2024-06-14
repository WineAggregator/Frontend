import { json } from "stream/consumers";
import { $api } from "../../../../http";
import { ICheckEventData } from "../../CheckEvent/types/IEventData";

export async function updateEvent(data: ICheckEventData, eventId: number) {
  const response = await $api.patch(`events/${eventId}`, JSON.stringify(data));
  return response;
}