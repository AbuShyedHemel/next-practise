"use server";

import { productsAPI } from "@/service/api/apis/productAPI";

export const getProducts = () => {
  return productsAPI.getProduct();
};
