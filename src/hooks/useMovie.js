import { useEffect, useState } from "react";
import api from "../services/api";

export default function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // GET
  const fetchMovies = async () => {
    try {
      const res = await api.get("/");
      setMovies(res.data);
    } finally {
      setLoading(false);
    }
  };

  // ADD
  const addMovie = async (newMovie) => {
    const res = await api.post("/", newMovie);
    setMovies((prev) => [...prev, res.data]);
  };

  // UPDATE
  const updateMovie = async (updated) => {
    const res = await api.put(`/${updated.id}`, updated);
    setMovies((prev) =>
      prev.map((m) => (m.id === updated.id ? res.data : m))
    );
  };

  // DELETE
  const deleteMovie = async (id) => {
    await api.delete(`/${id}`);
    setMovies((prev) => prev.filter((m) => m.id !== id));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return {
    movies,
    loading,
    addMovie,
    updateMovie,
    deleteMovie,
  };
}
