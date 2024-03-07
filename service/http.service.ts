import axios from "axios"

const baseURL = "https://dummyjson.com"
export const httpAuthService = (body?: unknown,url?:string,requestType?: "post" | 'get' | 'patch' | 'delete') => {
    return requestType === 'post' && axios.post(`${baseURL}/${url}`, { body })
    // return requestType === 'get' && axios.get(`${baseURL}/${url}`)
}