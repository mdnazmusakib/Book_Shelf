"use client";

import { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";

export default function BookShelf() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [activeTab, setActiveTab] = useState("All Books")

  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings")
      .then((res) => res.json())
      .then((data) => setBooks(data.docs));
  }, []);

  

  // const tabs = ["All Books", "Favourite", "Borrowed Books", "E-Books"]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        <div className="flex items-center gap-2 mb-6">
          <h1 className="text-xl font-semibold">My</h1>
          <span className="text-xl text-orange-500 font-semibold">Shelf</span>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book, idx) => (
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
                  <div className="text-xs text-gray-500">
                    Borrowed on {new Date().toLocaleDateString()}
                  </div>
                  <div className="font-medium line-clamp-1">{book.title}</div>
                  <div className="text-sm text-gray-600 line-clamp-1">
                    {book.author_name?.[0]}
                  </div>
                  <div className="text-xs text-gray-500">
                    Submission Due{" "}
                    {new Date(
                      Date.now() + 14 * 24 * 60 * 60 * 1000
                    ).toLocaleDateString()}
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      Borrowed
                    </span>
                    <button className="text-sm text-blue-500 hover:text-blue-600">
                      Return
                    </button>
                  </div>
                  <div className="text-sm text-gray-600">
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
