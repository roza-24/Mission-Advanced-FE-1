import { getFavorites, removeFavorite } from "../services/favorites";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemove = (id) => {
    removeFavorite(id);
    setFavorites(getFavorites());
  };

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-4">Belum ada favorit 😢</h2>
        <Link
          to="/"
          className="text-blue-400 underline text-lg hover:text-blue-300"
        >
          Cari film sekarang →
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">My Favorites ❤️</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {favorites.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <Link to={`/movie/${movie.id}`}>
                <img src={movie.poster} className="w-full h-64 object-cover" />
              </Link>

              <div className="p-4">
                <h3 className="font-semibold text-white">{movie.title}</h3>
                <p className="text-gray-400 text-sm">{movie.year}</p>

                <button
                  className="mt-3 bg-red-600 w-full py-2 rounded-lg hover:bg-red-700"
                  onClick={() => handleRemove(movie.id)}
                >
                  Remove Favorite
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
