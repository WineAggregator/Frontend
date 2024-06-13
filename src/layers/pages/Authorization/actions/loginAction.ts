import { redirect } from "react-router-dom";
import { store } from "../../../..";
import { IActionProps } from "../../../../types/IActionProps";
import { ILoginData } from "../types/ILoginData";
import { login } from "../api/login";

export async function loginAction({ request }: IActionProps) {
  const loginData = Object.fromEntries(await request.formData() as any) as ILoginData;
  const response = await login(loginData)
  if (response.status == 200) {
    store.login(response.data.id, response.data.userType);
    return redirect('/')
  }

  console.log(response)
  return response.status;
}