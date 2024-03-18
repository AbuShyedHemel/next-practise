export class HttpAuthService {
  baseURL: string;
  constructor(url: string) {
    this.baseURL = url;
  }

  get<T>(url?: string) {
    return request.fetchService(this.baseURL, url, "GET");
  }
  post(url?: string, payload?: {}) {
    return request.fetchService(this.baseURL, url, "POST", payload);
  }
}

export class RequestService {
  async fetchService<T>(
    baseURL: string,
    url?: string,
    method?: "GET" | "POST",
    payload?: {}
  ) {
    const res = await fetch(`${baseURL}${url}`, {
      method: `${method}`,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      return res.json();
    }
    if (!res.ok) {
      return res;
    }
  }
}
export const request = new RequestService();
