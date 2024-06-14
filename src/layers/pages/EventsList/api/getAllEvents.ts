import { events } from "../../../../constMock/const";
import { $api } from "../../../../http";
import { MyResponse } from "../../../../types/MyResponse";
import { IEventsListResponse } from "../types/IEventsListResponse";

export async function getAllEvents() {
  try {
    const response = await $api.get(`events`)

    return response;
  } catch(e: any) {
    return e.response;
  }
}