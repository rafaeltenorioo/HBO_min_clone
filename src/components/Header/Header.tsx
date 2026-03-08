import { useEffect, useState } from "react";
import { MenuFav } from "../MenuFav/MenuFav";
import styles from "./Header.module.css";
import { BtFav } from "../BtFav/BtFav";
import { NavigationLink } from "../NavigationLink/NavigationLink";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const handleFavMovie = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsMenuOpen(true);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>HBO min</h1>

      <nav className={styles.header_nav}>
        <NavigationLink children="Home" toPath="/" />
        <NavigationLink children="Filmes" toPath="/filmes" />
        <NavigationLink children="Séries" toPath="/series" />
      </nav>

      <BtFav
        handleFavMovie={handleFavMovie}
        className={styles.favMoviesHeader}
      />
      {isMenuOpen && <MenuFav setIsMenuOpen={setIsMenuOpen} />}
    </header>
  );
};
