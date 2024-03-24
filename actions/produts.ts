"use server";

import { productsAPI } from "@/service/api/apis/productAPI";

export const getProducts = (id: string) => {
  return productsAPI.getProduct(id);
};
