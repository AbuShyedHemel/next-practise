export class HttpAuthService {
  baseURL: string;
  constructor(url: string) {
    this.baseURL = url;
  }

  get(url?: string) {
    return requestService.fetchService(this.baseURL, url, "GET");
  }
  post(url?: string, payload?: {}) {
    return requestService.fetchService(this.baseURL, url, "POST", payload);
  }
}

export class RequestService {
  fetchService(
    baseURL: string,
    url?: string,
    method?: "GET" | "POST",
    payload?: {}
  ) {
    return fetch(`${baseURL}${url}`, {
      method: `${method}`,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }
}
export const requestService = new RequestService();
