import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import styles from "./BtFav.module.css";
import type React from "react";

interface BtFavProps {
  handleFavMovie: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isSaved?: boolean | undefined;
  className?: string;
}
export const BtFav = ({ handleFavMovie, isSaved, className }: BtFavProps) => {
  return (
    <button
      className={`${styles.iconFav} ${className || ""}`}
      onClick={handleFavMovie}
      aria-label="Botão de Salvar"
    >
      {isSaved ? <BsBookmarkFill size={20} /> : <BsBookmark size={20} />}
    </button>
  );
};
