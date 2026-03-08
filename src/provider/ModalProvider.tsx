import { ModalContext } from "@/context/ModalContext";
import type { MediaItem } from "@/types/movie";
import { useState, type ReactNode } from "react";

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [selectedMovie, setSelectedMovie] = useState<MediaItem | null>(null);

  const openModal = (movie: MediaItem) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };
  const isOpen = !!selectedMovie;

  return (
    <ModalContext.Provider
      value={{ selectedMovie, openModal, closeModal, isOpen }}
    >
      {children}
    </ModalContext.Provider>
  );
};
