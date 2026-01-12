import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

// optional interceptor
api.interceptors.request.use((config) => {
  console.log("API:", config.method?.toUpperCase(), config.url);
  return config;
});

export default api;
