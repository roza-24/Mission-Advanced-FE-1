import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getMovie = () => api.get("/movie");
export const addMovie = (data) => api.post("/movie", data);
export const updateMovie = (id, data) => api.put(`/movie/${id}`, data);
export const deleteMovie = (id) => api.delete(`/movie/${id}`);
