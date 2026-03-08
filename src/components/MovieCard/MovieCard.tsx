import type { MediaItem } from "@/types/movie";
import styles from "./MovieCard.module.css";
import { getImageUrl, getMediaTitle } from "@/utils/mediaUtils";
import React, { useContext } from "react";
import { SaveMoviesContext } from "@/context/SaveMoviesContext";
import { BtFav } from "../BtFav/BtFav";

interface MovieCardProps {
  movie: MediaItem;
  onSelect: (movie: MediaItem) => void;
  index: number;
}
export const MovieCard = ({ movie, onSelect, index }: MovieCardProps) => {
  const context = useContext(SaveMoviesContext);
  const isSaved = context?.savedMovies.some((m) => m.id === movie.id);

  const imageUrl = getImageUrl(movie.poster_path, "w185");

  const title = getMediaTitle(movie);

  const handleFavMovie = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    context?.toggleSaveMovie(movie);
  };

  return (
    <>
      <article
        className={styles.card}
        role="button"
        onClick={() => onSelect(movie)}
        tabIndex={0} // Permite que o usuário chegue aqui usando a tecla 'Tab'
        onKeyDown={(e) => e.key === "Enter" && onSelect(movie)}
      >
        <div className={styles.imgContainer}>
          <img
            src={imageUrl}
            alt={title}
            className={styles.poster}
            loading={index < 4 ? "eager" : "lazy"}
          />
          <BtFav
            handleFavMovie={handleFavMovie}
            isSaved={isSaved}
            className={styles.favPostCard}
          />
        </div>
      </article>
    </>
  );
};
