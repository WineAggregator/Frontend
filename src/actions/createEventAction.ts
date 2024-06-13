import { redirect } from "react-router-dom";
import { createEvent } from "../api/createEvent";

export async function createEventAction() {
  const response = await createEvent();
  if (response.status == 200) return redirect(`/updateEvent/${response.data}`);
}