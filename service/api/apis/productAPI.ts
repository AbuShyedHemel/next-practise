import { HttpService } from "@/service/http.service";
import { getServerSideCookie } from "@/service/server-utils";
import config from "@/utils/hosts";

class ProductAPI {
  constructor(private http: HttpService) {}

  getProduct(id: string) {
    return this.http.get<API.GetProductDetails>(`products/${id}`);
  }
}

export const productsAPI = new ProductAPI(
  new HttpService(config.apiKey, { getCookie: getServerSideCookie })
);
