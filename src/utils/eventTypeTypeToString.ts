import { EventType } from "../types/EventType";

export const EventTypes = {
  [EventType.Degustation]: 'Дегустация',
  [EventType.MasterClass]: 'Мастер класс'
}
export default function eventTypeToString(type: EventType) {
  return EventTypes[type];
}