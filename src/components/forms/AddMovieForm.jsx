import { useState } from "react";

export default function AddMovieForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !genre || !year) {
      alert("Title, Genre, dan Year wajib diisi");
      return;
    }

    const newMovie = {
      title,
      genre,
      year: Number(year),
      image,
      description,
    };

    try {
      setLoading(true);
      await onAdd(newMovie); //
      setTitle("");
      setGenre("");
      setYear("");
      setImage("");
      setDescription("");
    } catch (err) {
      alert("Gagal menambah movie");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 p-6 rounded-xl mb-8 max-w-3xl mx-auto"
    >
      <h2 className="text-white text-xl font-bold mb-4">Add New Movie</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Title"
          className="p-2 rounded bg-white/10 text-white"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Genre"
          className="p-2 rounded bg-white/10 text-white"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />

        <input
          type="number"
          placeholder="Year"
          className="p-2 rounded bg-white/10 text-white"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          className="p-2 rounded bg-white/10 text-white"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <textarea
        placeholder="Description"
        className="w-full p-2 rounded bg-white/10 text-white mt-4"
        rows="3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {image && (
        <img
          src={image}
          alt="preview"
          className="mt-4 w-32 h-48 object-cover rounded"
          onError={(e) => (e.target.style.display = "none")}
        />
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded"
      >
        {loading ? "Saving..." : "Add Movie"}
      </button>
    </form>
  );
}
