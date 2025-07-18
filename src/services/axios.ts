import axios, { AxiosInstance } from "axios";

const api : AxiosInstance = axios.create({
    baseURL: "https://ufc-conecta-backend.onrender.com/api/v1",
    timeout: 100000000,

});

export const testApi : AxiosInstance = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    timeout: 100000000,
})

export default api;