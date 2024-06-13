import { IActionProps } from "../../../../types/IActionProps";
import { getEvent } from "../api/getEvent";
import { ICheckEventData } from "../types/IEventData";

export async function CheckEventLoader( { params }: IActionProps): Promise<ICheckEventData> {
  const response = await getEvent(params.eventId);

  return response.data;
}