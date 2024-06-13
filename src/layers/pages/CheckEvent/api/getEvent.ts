import { link, photoLink } from "../../../../constMock/const";
import { $api } from "../../../../http";
import { EventType } from "../../../../types/EventType";
import { ICheckEventData } from "../types/IEventData";

export async function getEvent(eventId: number) {
  try {
    const response = await $api.get<ICheckEventData>(`events/${eventId}`);
    return response;
  } catch (error: any) {
    return error.response;
  }
}