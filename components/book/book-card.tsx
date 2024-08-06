"use client";

import Image from "next/image";
import { useState } from "react";
import { Star, StarOff } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useModal } from "@/hooks/use-modal-store";
import { Button } from "@/components/ui/button";

interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => {
  const [favBooks, setFavBooks, removeFavBooks] = useLocalStorage<Book[]>(
    "favBooks",
    []
  );
  const [isFavourite, setisFavourite] = useState(false);
  const { onOpen } = useModal();

  const handleAddToFav = () => {
    const newFavBooks = [...favBooks];

    if (favBooks.some((favBook) => favBook.id === book.id)) {
      newFavBooks.splice(favBooks.indexOf(book), 1);
      setFavBooks(newFavBooks);
      setisFavourite(false);
    } else {
      setFavBooks([...favBooks, book]);
      setisFavourite(true);
    }
  };

  return (
    <Card className="cursor-pointer p-2 hover:bg-slate-100 h-64">
      <div onClick={() => onOpen("open-book", { book })}>
        <CardHeader className="relative h-32">
          {book.volumeInfo.imageLinks ? (
            <Image
              fill
              src={book.volumeInfo.imageLinks.thumbnail}
              alt="cover"
              className="object-contain"
            />
          ) : (
            <div className="flex justify-center items-center h-full">
              <p>No Image</p>
            </div>
          )}
        </CardHeader>
        <CardContent className="p-2 h-16 overflow-hidden text-ellipsis">
          <CardTitle className="text-lg">{book.volumeInfo.title}</CardTitle>
        </CardContent>
      </div>
      <CardFooter>
        <Button
          onClick={handleAddToFav}
          size="icon"
          variant="ghost"
          className="w-full"
        >
          {isFavourite ? (
            <Star className="size-6 text-amber-400" />
          ) : (
            <StarOff className="size-6 text-amber-400" />
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
