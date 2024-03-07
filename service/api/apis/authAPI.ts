import axios from "axios"
import { z } from "zod"
import { LoginUserPayload } from "../@type"

class AuthAPI {
    loginUser(payload?: LoginUserPayload){
        return axios.post('https://dummyjson.com/auth/login', { payload })
    }
}
export const authAPI = new AuthAPI