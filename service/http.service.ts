import { RequestBody, RequestOptions } from "./types";

export class HttpAuthService {
  baseURL: string;
  constructor(url: string) {
    this.baseURL = url;
  }

  get<T>(url: string, options?: RequestOptions) {
    return this.request<T>(url, "GET", null, options);
  }
  post<T>(url: string, body: unknown, options?: RequestOptions) {
    return this.request<T>(url, "POST", JSON.stringify(body), options);
  }

  private async request<T>(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    body: RequestBody,
    options?: RequestOptions
  ) {
    const requestURL = `${this.baseURL}${url}`;
    const headers: RequestOptions["headers"] = {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...options?.headers,
    };
    try {
      const response = await fetch(requestURL, {
        method,
        body,
        headers,
      });

      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      return {} as T;
    }
  }
}

export class RequestService {}
export const requestService = new RequestService();
