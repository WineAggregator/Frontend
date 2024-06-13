import { $api } from "../http";
import { ICreateUpdateEventData } from "../layers/pages/UpdateEvent/types/createUpdateEventData";
import { EventType } from "../types/EventType";


export async function createEvent() {
  const event: ICreateUpdateEventData = {
    description: "",
    title: "",
    dateFrom: new Date(),
    dateTo: new Date(),
    price: 0,
    address: "",
    link: "",
    organizerName: "",
    eventType: EventType.Degustation
  }
  const response = await $api.post('events', JSON.stringify(event));
  return response;
}