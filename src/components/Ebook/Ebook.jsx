"use client";

import { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";

export default function BookShelf() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings")
      .then((res) => res.json())
      .then((data) => setBooks(data.docs));
  }, []);

  // Filter books with `ebook_count_i > 0`
  const eBooks = books.filter((book) => book.ebook_count_i > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        <div className="flex items-center gap-2 mb-6">
          <h1 className="text-xl font-semibold">Your</h1>
          <span className="text-xl text-orange-500 font-semibold">E-Books</span>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eBooks.map((book, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
            >
              <div className="relative p-4">
                <button className="absolute right-4 top-4 text-red-500">
                  <CiHeart className="w-5 h-5" />
                </button>
                <div className="aspect-[3/4] relative mb-4">
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt={book.title}
                    className="w-full h-full object-cover rounded-md"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <div className="font-medium text-sm">{book.title}</div>
                  <div className="text-sm text-gray-600">
                    {book.author_name?.[0] || "Unknown Author"}
                  </div>
                  <div className="text-xs text-gray-500">
                    Borrowed on: {new Date().toLocaleDateString()}
                  </div>
                  <div className="text-xs text-gray-500">
                    Submission Due:{" "}
                    {new Date(
                      Date.now() + 14 * 24 * 60 * 60 * 1000
                    ).toLocaleDateString()}
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <button className="w-full px-3 py-2 text-white bg-green-500 rounded-md hover:bg-green-600">
                      E-BOOK
                    </button>
                    <button className="w-full px-3 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                      Read
                    </button>
                  </div>
                  <div className="text-xs text-gray-500">
                    Rating:{" "}
                    {book.ratings_average
                      ? book.ratings_average.toFixed(1)
                      : "N/A"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
