import { error } from "console";
import { photoGallery } from "../../../../constMock/const";
import { $api } from "../../../../http";
import { MyResponse } from "../../../../types/MyResponse";
import { ICheckEventGallery } from "../types/ICheckEventGallery";

export default async function getGalleryForEvent(eventId: number) {
  try {
    //const response = await $api.get<ICheckEventData>(``);

    const response: MyResponse<ICheckEventGallery> = {
      status: 200,
      data: {
        links: photoGallery
      }
    }

    return response;
  } catch(e: any) {
    return e.response;
  }
}