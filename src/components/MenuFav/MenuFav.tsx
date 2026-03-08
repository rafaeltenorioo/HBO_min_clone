import { GrClose } from "react-icons/gr";
import styles from "./MenuFav.module.css";
import { useContext } from "react";
import { SaveMoviesContext } from "@/context/SaveMoviesContext";
import { getMediaTitle } from "@/utils/mediaUtils";
import { MenuFavEmpty } from "./MenuFavEmpty/MenuFavEmpty";
import { SavedItem } from "./SavedItem/SavedItem";

interface MenuFavProps {
  setIsMenuOpen: (a: boolean) => void;
}
export const MenuFav = ({ setIsMenuOpen }: MenuFavProps) => {
  const context = useContext(SaveMoviesContext);

  return (
    <div className={styles.overlay} onClick={() => setIsMenuOpen(false)}>
      <div
        className={styles.menuSavedMovies}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.menuHeader}>
          <button onClick={() => setIsMenuOpen(false)}>
            <GrClose size={15} />
          </button>
          <h2>Minha Lista</h2>
        </div>
        <div className={styles.savedList}>
          {/* Se ñ tiver filmes...  */}
          {!context?.savedMovies || context.savedMovies.length === 0 ? (
            <MenuFavEmpty />
          ) : (
            context?.savedMovies.map((item) => {
              const imageUrl = item.poster_path
                ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                : "";
              const title = getMediaTitle(item);
              return (
                <SavedItem
                  imageUrl={imageUrl}
                  item={item}
                  title={title}
                  key={item.id}
                  onClick={() => context?.toggleSaveMovie(item)}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
