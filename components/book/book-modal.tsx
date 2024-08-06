"use client";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useModal } from "@/hooks/use-modal-store";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export const BookModal = () => {
  const { data, isOpen, onClose, type } = useModal();
  const { book } = data;

  const isModalOpen = isOpen && type === "open-book";

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose} modal={true}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{book?.volumeInfo.title}</DialogTitle>
          <DialogDescription>
            Author: {book?.volumeInfo.authors?.join(", ")}
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <div className="flex justify-center">
          <div className="relative size-32 ">
            {book?.volumeInfo.imageLinks ? (
              <Image
                fill
                src={book?.volumeInfo.imageLinks.thumbnail}
                alt="cover"
                className="object-contain"
              />
            ) : (
              <div className="flex justify-center items-center h-full">
                <p>No Image</p>
              </div>
            )}
          </div>
        </div>
        <Label>Description</Label>
        <ScrollArea className="max-h-80">
          {book?.volumeInfo.description}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
