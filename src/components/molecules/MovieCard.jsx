import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie, onDelete, onUpdate }) {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(movie.title);
  const [genre, setGenre] = useState(movie.genre);
  const [image, setImage] = useState(movie.image);

  // 🔥 Sync state kalau movie berubah
  useEffect(() => {
    setTitle(movie.title);
    setGenre(movie.genre);
    setImage(movie.image);
  }, [movie]);

  const handleSave = () => {
    const updatedMovie = {
      ...movie,
      title,
      genre,
      image,
    };

    onUpdate(updatedMovie);
    setIsEdit(false);
  };

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-md">
      {/* IMAGE */}
      <img
        src={
          movie.image && movie.image.startsWith("http")
            ? movie.image
            : "https://via.placeholder.com/500x750?text=No+Image"
        }
        alt={movie.title}
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        {!isEdit ? (
          <>
            <Link to={`/movie/${movie.id}`}>
              <h3 className="font-bold text-white hover:text-red-400 cursor-pointer">
                {movie.title}
              </h3>
            </Link>

            <p className="text-gray-400 text-sm">{movie.genre}</p>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => setIsEdit(true)}
                className="bg-yellow-500 px-3 py-1 rounded text-sm"
              >
                Edit
              </button>

              <button
                onClick={() => onDelete(movie.id)}
                className="bg-red-600 px-3 py-1 rounded text-sm"
              >
                Delete
              </button>
            </div>
          </>
        ) : (
          <>
            <input
              className="w-full p-2 rounded text-black mb-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Movie Title"
            />

            <input
              className="w-full p-2 rounded text-black mb-2"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              placeholder="Genre"
            />

            <input
              className="w-full p-2 rounded text-black mb-2"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image URL"
            />

            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="bg-green-600 px-3 py-1 rounded text-sm"
              >
                Save
              </button>

              <button
                onClick={() => setIsEdit(false)}
                className="bg-gray-500 px-3 py-1 rounded text-sm"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
