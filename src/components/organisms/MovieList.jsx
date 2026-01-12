import MovieCard from "../molecules/MovieCard";

export default function MovieList({ movies, setMovies }) {
  // DELETE
  const handleDelete = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  // UPDATE (EDIT)
  const handleUpdate = (updatedMovie) => {
    const updatedMovies = movies.map((movie) =>
      movie.id === updatedMovie.id ? updatedMovie : movie
    );
    setMovies(updatedMovies);
  };

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}
