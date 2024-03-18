export class HttpAuthService {
  baseURL: string;
  constructor(url: string) {
    this.baseURL = url;
  }

  get<T>(url: string, payload?: {}) {
    return request.fetchService<T>(this.baseURL, url, "GET", payload);
  }
  post<T>(url: string, payload?: {}) {
    return request.fetchService<T>(this.baseURL, url, "POST", payload);
  }
  patch<T>(url: string, payload?: {}) {
    return request.fetchService<T>(this.baseURL, url, "PATCH", payload);
  }
  delete<T>(url: string, payload?: {}) {
    return request.fetchService<T>(this.baseURL, url, "DELETE", payload);
  }
}

export class RequestService {
  async fetchService<T>(
    baseURL: string,
    url: string,
    method: "GET" | "POST" | "PATCH" | "DELETE",
    payload?: {}
  ): Promise<T> {
    const res = await fetch(`${baseURL}${url}`, {
      method: `${method}`,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      throw Error;
    }
    return res.json();
  }
}
export const request = new RequestService();
