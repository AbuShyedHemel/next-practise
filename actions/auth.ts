"use server";

import { authAPI } from "@/service/api/apis/authAPI";
import { cookies } from "next/headers";

export const loginUser = async (payload: any) => {
  const res = await authAPI.loginUser(payload);

  if (res?.token) cookies().set("token", res.token, { httpOnly: true });

  return res;
};
