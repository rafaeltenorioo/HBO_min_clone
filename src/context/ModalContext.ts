import type { MediaItem } from "@/types/movie";
import { createContext } from "react";

interface ModalContextData {
  selectedMovie: MediaItem | null;
  isOpen: boolean;
  openModal: (movie: MediaItem) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextData>(
  {} as ModalContextData,
);
