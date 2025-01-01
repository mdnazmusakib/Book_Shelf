import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaCircleXmark, FaXmark } from "react-icons/fa6";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  // Load favorite books from localStorage on component mount
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const removeFavorite = (bookId) => {
    const updatedFavorites = favorites.filter((book) => book.id !== bookId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handlePreview = (book) => {
    setSelectedBook(book);
  };

  const closePreview = () => {
    setSelectedBook(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center lg:text-left ">
        My Favorite Books
      </h1>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
          <div className="lg:grid lg:grid-cols-[332px_repeat(6,_1fr)] lg:font-medium hidden">
            <div>Title</div>
            <div>Ratings</div>
            <div>Category</div>
            <div>Availability</div>
            <div>Status</div>
          </div>
          {favorites.map((book) => (
            <div
              key={book.id}
              className="border border-gray-300 rounded-md p-4 flex flex-col lg:grid lg:grid-cols-[300px_repeat(6,_1fr)] gap-4 bg-white items-center cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <img
                  src={book.coverImg}
                  alt={`${book.title} cover`}
                  className="w-auto lg:w-10 lg:h-auto object-cover mb-4 rounded-[10px] lg:rounded-[5px]"
                />
                <div className="flex flex-col items-center lg:items-start">
                  <h3 className="font-normal text-lg">{book.title}</h3>
                  <p className="text-gray-600 text-base">
                    {book.author}, {book.publishYear}
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                {book.ratings}
                <span className="text-gray-400 text-[12px]">/5</span>
              </p>
              <p className="text-gray-600">{book.categories.split(",")[0]}</p>
              <div className="text-gray-600 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  {book.hardCopy ? (
                    <IoIosCheckmarkCircle className="text-[#42BB4E]" />
                  ) : (
                    <FaCircleXmark className="text-[#4D4D4D]" />
                  )}
                  Hard Copy
                </div>
                <div className="flex items-center gap-2">
                  {book.eBook ? (
                    <IoIosCheckmarkCircle className="text-[#42BB4E]" />
                  ) : (
                    <FaCircleXmark className="text-[#4D4D4D]" />
                  )}
                  E-Book
                </div>
              </div>
              <p
                className={`text-white text-center rounded-md text-[14px] w-20 ${
                  book.status === "in-shelf" ? "bg-[#42BB4E]" : "bg-[#42BB4E]"
                }`}
              >
                {book.status === "in-shelf" ? "In Shelf" : "Borrowed"}
              </p>

              <button
                onClick={() => removeFavorite(book.id)}
                className="text-red-500 text-2xl hover:text-red-700"
              >
                <FaHeart />
              </button>

              <button
                onClick={() => handlePreview(book)}
                className="px-4 py-2 bg-white border border-orange-400 text-orange-400 rounded-md hover:bg-orange-500 hover:text-white"
              >
                Preview
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center">
          No favorite books added yet.
        </p>
      )}

      {/* Popup Modal for Book Preview */}
      {selectedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-3/4 max-w-xl relative">
            <button
              onClick={closePreview}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FaXmark className="text-2xl hover:text-orange-500" />
            </button>
            <div
              className="flex flex-col items-center overflow-y-auto"
              style={{ maxHeight: "80vh" }}
            >
              <img
                src={selectedBook.coverImg}
                alt={`${selectedBook.title} cover`}
                className="w-40 h-auto mb-4 rounded-lg"
              />
              <h2 className="text-xl font-bold mb-2">{selectedBook.title}</h2>
              <p>
                <strong>Author:</strong> {selectedBook.author}
              </p>
              <p>
                <strong>Published Year:</strong> {selectedBook.publishYear}
              </p>
              <p>
                <strong>Category:</strong> {selectedBook.categories}
              </p>
              <p>
                <strong>Description:</strong>{" "}
                {selectedBook.description || "No description available."}
              </p>
              <p>
                <strong>Viewed:</strong> {new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
