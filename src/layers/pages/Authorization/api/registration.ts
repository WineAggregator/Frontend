import { $api } from "../../../../http";
import { IUser } from "../../../../types/IUser";
import { ILoginData } from "../types/ILoginData";
import { IRegistrationData } from "../types/IRegistration";

export async function registration(data: IRegistrationData) {
  const response = await $api.post<IUser>("users/register", JSON.stringify(data));
  return response;
}