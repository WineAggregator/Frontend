import { redirect } from "react-router-dom";
import { IActionProps } from "../../../../types/IActionProps";
import { activateTicket } from "../api/activateTicket";

export async function activateTicketAction({ params }: IActionProps) {
  const ticketId = +params.ticketId;
  const response = await activateTicket(ticketId);
  return redirect(`/activateTicket/${ticketId}`);
}