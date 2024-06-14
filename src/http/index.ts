import axios, { AxiosError } from "axios"
import { store } from "..";
import { redirect } from "react-router-dom";

export const API_URL = "http://85.193.80.175:8080/api/v1/";

export const $api = axios.create({
  baseURL: API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'AuthInfo': '',
    withCredentials: true,
    mode: 'no-cors',
  }
});

$api.interceptors.request.use((config) => {
  config.headers["AuthInfo"] = JSON.stringify(store.user)
  return config;
})

$api.interceptors.response.use(
  (res) => {
    console.log(res);
    return res;
  },
  (error) => {
    console.log(error)
    if (!store.isAuth) return redirect("/");
    if (error.response != undefined) {
      if (axios.isAxiosError(error) && (error.response.status == 400 || error.response.status == 422)) {
        return error.response;
      } 

      return redirect('/ServerErrorPage');
    }
    return redirect('/ServerErrorPage')   
  }
)