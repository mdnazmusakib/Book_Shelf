import React from "react";

import { useEffect, useState } from "react";

const ScrollArea = ({ children, className }) => (
  <div className={`overflow-x-auto ${className}`}>{children}</div>
);

const ScrollBar = () => null;

async function fetchBooks(query) {
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
  );
  const data = await response.json();

  return data.docs.map((book) => ({
    id: book.key,
    title: book.title,
    author: book.author_name?.[0] || "Unknown Author",
    coverUrl: book.cover_i
      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
      : "https://via.placeholder.com/150?text=No+Cover",
    firstPublishYear: book.first_publish_year || "Unknown Year",
  }));
}

function Quote() {
  return (
    <div className="relative">
      <div className="carousel w-full lg:w-auto lg:h-[304px] bg-gradient-63deg rounded-box p-4">
        <div
          id="item1"
          className="carousel-item w-full flex flex-col gap-2 p-2 lg:p-5 "
        >
          <h1 className="text-white font-medium text-2xl">Today’s Quote</h1>
          <p className="text-white text-lg ">
            “There is more treasure in books than in all the <br />
            pirate’s loot on Treasure Island.”
          </p>
          <p className="text-white text-lg text-right">-Walt Disney</p>
        </div>
        <div
          id="item2"
          className="carousel-item w-full flex flex-col gap-2 p-5"
        >
          <h1 className="text-white font-medium text-2xl">Today’s Quote</h1>
          <p className="text-white text-lg ">
            “There is more treasure in books than in all the <br />
            pirate’s loot on Treasure Island.”
          </p>
          <p className="text-white text-lg text-right">-Walt Disney</p>
        </div>
        <div
          id="item3"
          className="carousel-item w-full flex flex-col gap-2 p-5"
        >
          <h1 className="text-white font-medium text-2xl">Today’s Quote</h1>
          <p className="text-white text-lg ">
            “There is more treasure in books than in all the <br />
            pirate’s loot on Treasure Island.”
          </p>
          <p className="text-white text-lg text-right">-Walt Disney</p>
        </div>
        <div
          id="item4"
          className="carousel-item w-full flex flex-col gap-2 p-5"
        >
          <h1 className="text-white font-medium text-2xl">Today’s Quote</h1>
          <p className="text-white text-lg ">
            “There is more treasure in books than in all the <br />
            pirate’s loot on Treasure Island.”
          </p>
          <p className="text-white text-lg text-right">-Walt Disney</p>
        </div>
      </div>
      <div className="flex w-[200px] justify-center gap-2 py-2 absolute bottom-2 lg:bottom-16 lg:right-[400px]">
        <a
          href="#item1"
          className="btn btn-xs rounded-badge bg-transparent text-transparent hover:bg-white"
        >
          1
        </a>
        <a
          href="#item2"
          className="btn btn-xs rounded-badge bg-transparent text-transparent hover:bg-white"
        >
          2
        </a>
        <a
          href="#item3"
          className="btn btn-xs rounded-badge bg-transparent text-transparent hover:bg-white"
        >
          3
        </a>
        <a
          href="#item4"
          className="btn btn-xs rounded-badge bg-transparent text-transparent hover:bg-white"
        >
          4
        </a>
      </div>
    </div>
  );
}

function BookList({ books }) {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-[16px]">
      <div className="flex w-max space-x-4 p-4">
        {books.map((book) => (
          <div key={book.id} className="w-[150px] shrink-0">
            <div className="p-4">
              <div className="aspect-[2/3] relative overflow-hidden rounded-[16px] ">
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="mt-2">
                <h3 className="font-semibold text-sm truncate">{book.title}</h3>
                <p className="text-sm text-gray-500 truncate">{book.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBooks() {
      try {
        const fetchedBooks = await fetchBooks("the+lord+of+the+rings");
        setBooks(fetchedBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    }

    loadBooks();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <span className="loading loading-bars loading-lg text-[#F34040]"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen  max-w-[80vw] mx-auto">
      <main className="container mx-auto lg:px-4 lg:py-8 px-0 py-0">
        <div className="lg:grid grid-cols-2 gap-4 items-center">
          <Quote />

          <section className=" flex flex-col lg:flex-row border rounded-[16px]">
            <div className="hidden lg:block  bg-gradient-63deg rounded-l-[16px]">
            <h2 className="text-xl font-semibold text-white h-full w-[60px]  flex items-center justify-center -rotate-90">
              New Arrivals
            </h2>
            </div>

            <h2 className="text-2xl font-semibold text-white block lg:hidden mt-4  bg-gradient-63deg rounded-t-[16px] text-center">
              New Arrivals
            </h2>

            <BookList books={books.slice(0, 12)} />
          </section>
        </div>

        <section className="mt-12">
          <h1 className="text-3xl font-bold text-gray-900">Good Morning</h1>
          <p className="mt-2 text-gray-600 font-semibold text-lg">Recommended for You</p>
          <BookList books={books.slice(0, 12)} />
        </section>

        <section className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-600">
              Recent Readings
            </h2>
          </div>
          <BookList books={books.slice(13, 24)} />
        </section>
      </main>
    </div>
  );
}

export default Home;
