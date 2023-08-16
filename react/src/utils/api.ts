import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.DEV
    ? "http://localhost:3001"
    : "http://localhost:3001",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  config.headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  return config;
});

export default api;
