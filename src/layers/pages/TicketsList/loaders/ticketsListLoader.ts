import { getEventsByTicketsUser } from "../../../../api/getEventsByTicketsUser";
import { IActionProps } from "../../../../types/IActionProps";
import { getEvent } from "../../CheckEvent/api/getEvent";
import { ICheckEventData } from "../../CheckEvent/types/IEventData";
import { getTickets } from "../api/getTickets";
import { ITicket } from "../types/ITicket";

export async function ticketsListLoader() {
  const response = await getTickets();
  const responseEvents = await getEventsByTicketsUser();
  return response.data.tickets.map((ticket: ITicket) => {
    return {
      ticket: ticket,
      event: responseEvents.data.events.filter((event: ICheckEventData) => ticket.eventId == event.id)[0]
    }
  });
}