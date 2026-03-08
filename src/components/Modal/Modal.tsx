import { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";
import { getMediaDate, getMediaTitle } from "@/utils/mediaUtils";
import { SaveMoviesContext } from "@/context/SaveMoviesContext";
import { BtFav } from "../BtFav/BtFav";
import { useModal } from "@/hooks/useModal";

export const Modal = () => {
  const modalRef = useRef<HTMLDivElement>(null);

  const context = useContext(SaveMoviesContext);

  const { selectedMovie, closeModal } = useModal();

  const isSaved = context?.savedMovies.some((m) => m.id === selectedMovie?.id);

  // Fechar a modal com Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    // Adiciona o ouvinte de evento quando a modal abre
    window.addEventListener("keydown", handleKeyDown);

    // Remove o ouvinte quando a modal fecha
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  const handleFavMovie = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (selectedMovie) {
      context?.toggleSaveMovie(selectedMovie);
    }
  };
  if (!selectedMovie) return null;

  const title = getMediaTitle(selectedMovie);
  const date = getMediaDate(selectedMovie);
  const imageUrl = selectedMovie.poster_path
    ? `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`
    : "https://via.placeholder.com/500x750?text=Sem+Imagem";
  return createPortal(
    <div
      onClick={closeModal}
      className={styles.container_modal}
      role="dialog" // Diz ao leitores de tela que isso é uma janela de dialogo
      aria-modal="true" // Impede que os leitores de tela leiam o que está atrás da modal
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className={styles.modal_content}
      >
        <div className={styles.imgContainer}>
          <img
            src={imageUrl}
            alt={title}
            className={styles.poster}
            loading="lazy"
          />
          <span className={styles.rating}>
            {selectedMovie.vote_average.toFixed(2)}
          </span>
          <BtFav
            handleFavMovie={handleFavMovie}
            isSaved={isSaved}
            className={styles.favPostCard}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.content_text}>
            <h3 className={styles.title} title={title}>
              {title}
            </h3>

            <time className={styles.date}>
              {date
                ? new Date(date).toLocaleDateString("pt-BR")
                : "Indisponível"}
            </time>

            <p className={styles.description} title={selectedMovie.overview}>
              {selectedMovie.overview
                ? selectedMovie.overview
                : "Sinopse Indisponível"}
            </p>
          </div>

          <button
            onClick={closeModal}
            aria-label="Fechar Modal"
            className={styles.btClose}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")!,
  );
};
