import { BookContainer } from "@/components/book/book-container";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:max-w-4xl m-auto">
      <BookContainer />
    </main>
  );
}
