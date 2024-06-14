import { redirect } from "react-router-dom";
import { buyTicket } from "../api/buyTicket";
import { IActionProps } from "../types/IActionProps";

export async function buyTicketAction({ params }: IActionProps) {
  const eventId = +params.eventId;
  const response = await buyTicket(eventId);
  if (response.status == 200) return redirect(`/myTickets`);
  
  return redirect('/ServerErrorPage');
}