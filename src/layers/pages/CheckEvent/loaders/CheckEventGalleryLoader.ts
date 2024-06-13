import { IActionProps } from "../../../../types/IActionProps";
import getGalleryForEvent from "../api/getGalleryForEvent";

export default async function CheckEventGalleryLoader({ params }: IActionProps) {
  const response = await getGalleryForEvent(params.eventId);

  return response.data;
}