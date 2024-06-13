import { $api } from "../../../../http";
import { IUser } from "../../../../types/IUser";
import { ILoginData } from "../types/ILoginData";

export async function login(data: ILoginData) {
  const response = await $api.post<IUser>("users/login", JSON.stringify(data));
  return response;
}