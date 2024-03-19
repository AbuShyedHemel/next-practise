"use server";

import { cookies } from "next/headers";

export const getServerSideCookie = async (key: string) => {
  return cookies().get(key)?.value || null;
};
