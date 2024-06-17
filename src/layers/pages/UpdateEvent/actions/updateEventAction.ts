import { IActionProps } from "../../../../types/IActionProps";
import { ICheckEventData } from "../../CheckEvent/types/IEventData";
import { updateEvent } from "../api/upadateEvent";

export async function updateEventAction({ request, params }: IActionProps) {
  const formData = Object.fromEntries(await request.formData() as any) as ICheckEventData;
  formData.eventType = +formData.eventType
  const response = await updateEvent(formData, +params.eventId);
  return response.status;
}