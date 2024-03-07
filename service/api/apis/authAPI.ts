import axios from "axios"
import { z } from "zod"
import { LoginUserPayload } from "../@type"
import { httpAuthService } from "@/service/http.service"

class AuthAPI {
    loginUser(payload?: LoginUserPayload){
        return httpAuthService(payload,'auth/login')
    }
}
export const authAPI = new AuthAPI