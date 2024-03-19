import { HttpService } from "@/service/http.service";
import { LoginUserPayload, LoginUserResponse } from "../@type";
import { cookies } from "next/headers";
import { getServerSideCookie } from "@/service/server-utils";

class AuthAPI {
  constructor(private http: HttpService) {}

  loginUser(payload?: LoginUserPayload) {
    return this.http.post<LoginUserResponse>("auth/login", payload);
  }
}

export const authAPI = new AuthAPI(new HttpService("https://dummyjson.com/"));

export const authApiClient = new AuthAPI(
  new HttpService("https://dummyjson.com/")
);
