const API = async ({
  url,
  method = "GET",
  body,
  headers = {}
}: {
  url: string;
  method?: string;
  body?: any;
  headers?: Record<string, string>;
}) => {
  const token = localStorage.getItem("token");
  try {
    const commonHeaders = {
      Authorization: `Bearer ${token}`,
      ...headers
    };

    const requestOptions: RequestInit = {
      method,
      headers: commonHeaders
    };

    if (body instanceof FormData) {
      requestOptions.body = body;
    } else {
      requestOptions.body = body ? JSON.stringify(body) : undefined;
      requestOptions.headers = {
        ...commonHeaders,
        "Content-Type": "multipart/form-data"
      };
    }

    const response = await fetch(`/api/${url}`, requestOptions);

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("API request error:", error);
    throw new Error("API request error");
  }
};

export default API;
