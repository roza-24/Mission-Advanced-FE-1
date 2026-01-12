import { useState } from "react";

export default function AddMovieForm({ movies, setMovies }) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");

  const handleAddMovie = () => {
    if (!title || !genre || !year || !image) return;

    const newMovie = {
      id: crypto.randomUUID(),
      title,
      genre,
      year,
      image,
    };

    setMovies([...movies, newMovie]);
    setTitle("");
    setGenre("");
    setYear("");
    setImage("");
  };

  return (
    <div className="w-full bg-gray-900/80 backdrop-blur rounded-2xl p-6">
      <h2 className="text-white text-xl font-semibold mb-6">➕ Add Movie</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="col-span-1 md:col-span-1 p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-600"
        />

        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="col-span-1 p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-600"
        />

        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="col-span-1 p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-600"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="col-span-1 md:col-span-4 p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-600"
        />
      </div>

      {image && (
        <div className="mt-4">
          <p className="text-gray-400 text-sm mb-2">Preview</p>
          <img
            src={image}
            alt="Preview"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/500x750?text=Invalid+Image";
            }}
            className="w-40 h-56 object-cover rounded-lg shadow-md"
          />
        </div>
      )}

      <div className="flex justify-end mt-6">
        <button
          onClick={handleAddMovie}
          className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white font-medium transition"
        >
          Add Movie
        </button>
      </div>
    </div>
  );
}
