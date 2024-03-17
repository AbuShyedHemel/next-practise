import { HttpAuthService } from "@/service/http.service";
import config from "@/utils/hosts";

class ProductAPI {
  constructor(private http: HttpAuthService) {}

  getProduct() {
    return this.http.get("products/1");
  }
}

const httpAuthService = new HttpAuthService(config.apiKey);
export const productsAPI = new ProductAPI(httpAuthService);
