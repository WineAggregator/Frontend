import { EventType } from "../../../../types/EventType"

export interface ICreateUpdateEventData {
  title: string,
  description: string,
  address: string,
  price: number
  link: string
  eventType: EventType
  dateFrom: Date,
  dateTo: Date,
  organizerName: string
}