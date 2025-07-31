import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://ufc-conecta-backend.onrender.com/api/v1",
  timeout: 100000000,
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("acessToken");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const renewAcessToken = await authAPi.post("/auth/refresh");
    localStorage.setItem("acessToken", renewAcessToken.data.accessToken);

    console.log(renewAcessToken);
    return api(originalRequest);
  }
);

export const authAPi: AxiosInstance = axios.create({
  baseURL: "https://ufc-conecta-backend.onrender.com/api/v1",
  timeout: 100000000,
});

authAPi.interceptors.request.use((config) => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (refreshToken) {
    config.headers.Authorization = `Bearer ${refreshToken}`;
  }
  return config;
});

export const localApi: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  timeout: 100000000,
});

localApi.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("acessToken");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

localApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const renewAcessToken = await authAPi.post("/auth/refresh");
    localStorage.setItem("acessToken", renewAcessToken.data.accessToken);

    console.log(renewAcessToken);
    return localApi(originalRequest);
  }
);

export default api;
