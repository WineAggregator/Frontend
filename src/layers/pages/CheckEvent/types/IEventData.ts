import { EventType } from "../../../../types/EventType";

export interface ICheckEventData {
  id: number,
  title: string,
  description: string,
  address: string,
  price: number,
  link: string,
  eventType: EventType | number,
  dateFrom: Date,
  dateTo: Date,
  organizerName: string,
  previewPhotoLink: string
}