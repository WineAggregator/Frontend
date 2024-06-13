import { IActionProps } from "../../../../types/IActionProps";
import { getEvent } from "../../CheckEvent/api/getEvent";
import { ICheckEventData } from "../../CheckEvent/types/IEventData";

export async function updateEventLoader({ params }: IActionProps) {
  const eventId = params.eventId;
  if (eventId == 'new') return {} as ICheckEventData;
  const response = await getEvent(eventId);
  return response.data;
}