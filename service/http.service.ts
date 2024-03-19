type HttpServiceConfig = {
  getCookie?: (key: string) => Promise<string | null | undefined>;
};
export class HttpService {
  baseUrl: string;
  config: HttpServiceConfig | undefined;

  private headers: Record<string, string> = {
    Connection: "keep-alive",
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  };

  constructor(baseUrl: string, config?: HttpServiceConfig) {
    this.baseUrl = baseUrl;
    this.config = config;
  }
  request = async <TData = unknown>(url: string, options?: RequestInit) => {
    const token = await this.config?.getCookie?.("token");
    if (token) this.headers["Authorization"] = `Bearer ${token}`;
    try {
      const response = await fetch(url, { ...options, headers: this.headers });

      const data = await response.json();

      if (response.ok) {
        return data as TData;
      }
    } catch (error) {
      if (error instanceof Error) throw error;
      throw new Error("Something went wrong!");
    }
  };

  get<TData = unknown>(path: string) {
    return this.request<TData>(`${this.baseUrl}${path}`);
  }

  post<TData = unknown>(path: string, body: unknown, options?: RequestInit) {
    return this.request<TData>(`${this.baseUrl}${path}`, {
      ...options,
      method: "POST",
      body: JSON.stringify(body),
    });
  }
}
