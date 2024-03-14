import { HttpAuthService } from "@/service/http.service";

class ProductAPI {
    constructor(private http: HttpAuthService) {}

    getProduct(){
        return this.http.get('products/1')
    }
}
const httpAuthService = new HttpAuthService('https://dummyjson.com/')
export const productsAPI = new ProductAPI(httpAuthService)