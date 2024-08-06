"use client";

import { Skeleton } from "@/components/ui/skeleton";

import { BookCard } from "./book-card";

interface BookListProps {
  books: Book[];
}

export const BookList = ({ books }: BookListProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 mt-4 gap-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

BookList.Skeleton = function BookListSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 mt-4 gap-4">
      <Skeleton className="h-64" />
      <Skeleton className="h-64" />
      <Skeleton className="h-64" />
      <Skeleton className="h-64" />
      <Skeleton className="h-64" />
      <Skeleton className="h-64" />
      <Skeleton className="h-64" />
      <Skeleton className="h-64" />
      <Skeleton className="h-64" />
      <Skeleton className="h-64" />
    </div>
  );
};
