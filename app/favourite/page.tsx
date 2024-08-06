import { BookFavouriteContainer } from "@/components/book/book-favourite-container";

const FavouritePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:max-w-4xl m-auto">
      <BookFavouriteContainer />
    </main>
  );
};

export default FavouritePage;
