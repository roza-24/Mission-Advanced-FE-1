import { useEffect, useState } from "react";
import * as api from "../services/moviesApi";

export default function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getMovie().then((res) => {
      setMovies(Array.isArray(res.data) ? res.data : []);
      setLoading(false);
    });
  }, []);

  const addMovie = async (movie) => {
    try {
      const res = await api.addMovie(movie);
      setMovies((prev) => [res.data, ...prev]);
    } catch (error) {
      console.error("Failed to add movie:", error);
      throw error;
    }
  };

  const updateMovie = async (updatedMovie) => {
    const res = await api.updateMovie(updatedMovie.id, updatedMovie);

    setMovies((prev) =>
      prev.map((m) => (m.id === updatedMovie.id ? res.data : m))
    );
  };

  const deleteMovie = async (id) => {
    await api.deleteMovie(id);
    setMovies((prev) => prev.filter((m) => m.id !== id));
  };

  return { movies, loading, addMovie, updateMovie, deleteMovie };
}
