import { useParams, Link } from "react-router-dom";
import movies from "../data/movies";
import { addFavorite, removeFavorite, isFavorite } from "../services/favorites";
import { useState } from "react";

export default function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);
  const [favorite, setFavorite] = useState(isFavorite(movie.id));

  const toggleFavorite = () => {
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
    setFavorite(!favorite);
  };

  if (!movie) {
    return <div className="pt-24 text-center text-white">Movie not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-24">
      <Link
        to="/"
        className="text-blue-800 hover:underline text-lg mb-4 inline-block"
      >
        ← Back to Home
      </Link>

      <div className="pt-24 px-6 max-w-6xl mx-auto text-white">
        <img
          src={
            movie.image?.startsWith("http")
              ? movie.image
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={movie.title}
          className="w-full max-h-[520px] object-cover rounded-xl mb-8"
        />

        {/* Movie Info */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{movie.title}</h1>

          <div className="flex gap-4 text-gray-300">
            <p>{movie.year}</p>
            <span>•</span>
            <p>{movie.genre}</p>
          </div>

          <p className="text-gray-200 leading-relaxed">{movie.description}</p>

          <button className="mt-4 bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            ▶ Watch Now
          </button>
          <h2 className="text-2xl font-bold mt-10 mb-3">Trailer</h2>

          <iframe
            className="w-full h-64 md:h-96 rounded-xl"
            src={movie.trailer}
            title="YouTube trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button
            onClick={toggleFavorite}
            className="mt-4 bg-red-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition"
          >
            {favorite ? "❤️ Remove Favorite" : "🤍 Add to Favorite"}
          </button>
        </div>
      </div>
    </div>
  );
}
