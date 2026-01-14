import useMovies from "../hooks/useMovie";
import MovieList from "../components/organisms/MovieList";

import AddMovieForm from "../components/forms/AddMovieForm";

export default function Home() {
  const { movies, loading, addMovie, updateMovie, deleteMovie } = useMovies();

  if (loading) {
    return <p className="text-white p-6">Loading...</p>;
  }

  return (
    <div className="pt-24 px-6">
      <AddMovieForm onAdd={addMovie} />

      <MovieList
        movies={movies}
        onDelete={deleteMovie}
        onUpdate={updateMovie}
      />
    </div>
  );
}
