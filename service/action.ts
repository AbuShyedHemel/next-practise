"use server";

import { cookies } from "next/headers";

export const storeToken = (token: string) => {
  cookies().set("token", token);
};
