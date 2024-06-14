import { getTicket } from "../../../../actions/getTicket";
import { getEventsByTicketsUser } from "../../../../api/getEventsByTicketsUser";
import { IActionProps } from "../../../../types/IActionProps";
import { getEvent } from "../../CheckEvent/api/getEvent";
import { checkOrganizer } from "../api/checkOrganizer";

export async function activateTicketLoader({ params }: IActionProps) {
  const checkResponse = await checkOrganizer(+params.ticketId);
  const ticketResponse = await getTicket(+params.ticketId);
  const eventResponse = await getEvent(ticketResponse.data.eventId);

  return {
    isOrganizer: checkResponse.data.isOrganizer,
    ticket: ticketResponse.data,
    event: eventResponse.data
  }
}