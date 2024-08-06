"use client";

import { useLocalStorage } from "usehooks-ts";

import { BookList } from "./book-list";

export const BookFavouriteContainer = () => {
  const [favBooks] = useLocalStorage<Book[]>("favBooks", []);

  return (
    <div>
      <h1 className="text-center font-semibold text-xl">Favourite</h1>
      {favBooks ? <BookList books={favBooks} /> : <p>No Favourite Books</p>}
    </div>
  );
};
