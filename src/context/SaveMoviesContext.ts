import type { MediaItem } from "@/types/movie";
import { createContext } from "react";

interface SaveMoviesProps {
  savedMovies: MediaItem[];
  toggleSaveMovie: (movie: MediaItem) => void
}

export const SaveMoviesContext = createContext<SaveMoviesProps | undefined>(undefined)
