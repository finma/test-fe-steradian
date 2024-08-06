"use client";

import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { BookList } from "./book-list";

const formSchema = z.object({
  term: z.string().min(1),
});

export const BookContainer = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      term: "",
    },
  });

  const fetchBooks = async (term: string) => {
    setIsFetching(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_GOOGLE_BOOK_URL}?q=${term}&key=${process.env.NEXT_PUBLIC_GOOGLE_BOOK_API_KEY}`
    );
    const data = await res.json();

    console.log(data);
    setBooks(data.items);
    setIsFetching(false);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    fetchBooks(values.term);
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="term"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Search</FormLabel>
                <FormControl>
                  <Input placeholder="Search book" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>

      {isFetching && <BookList.Skeleton />}

      {books && <BookList books={books} />}
    </div>
  );
};
