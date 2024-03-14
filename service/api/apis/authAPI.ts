import { LoginUserPayload } from "../@type"
import { HttpAuthService } from "@/service/http.service"

class AuthAPI {
    constructor(private http: HttpAuthService){}

    loginUser(payload?: LoginUserPayload){
        return this.http.post('auth/login',payload)
    }
}
const httpAuthService = new HttpAuthService('https://dummyjson.com/')
export const authAPI = new AuthAPI(httpAuthService)