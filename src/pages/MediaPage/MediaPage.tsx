import { NavigationButton } from "@/components/NavigationButton/NavigationButton";
import { InputPage } from "@/components/InputPage/InputPage";
import { MovieCard } from "@/components/MovieCard/MovieCard";
import { useMovies } from "@/hooks/useMovies";
import { useEffect, useState } from "react";

import styles from "./MediaPage.module.css";
import { useModal } from "@/hooks/useModal";
import { Skeleton } from "@/components/Skeleton/Skeleton";
import { NavigationLink } from "@/components/NavigationLink/NavigationLink";

interface MediaPageProps {
  type: "movie" | "tv";
  // title: string;
  category: "popular" | "top_rated" | "upcoming";
}
export const MediaPage = ({ type, category }: MediaPageProps) => {
  const [page, setPage] = useState(1);

  const { openModal } = useModal();

  const { data, isLoading } = useMovies(type, category, page);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <main className={styles.mediaPageContainer}>
      <nav className={styles.nav_movies_category}>
        {type === "movie" ? (
          <>
            <NavigationLink toPath="/filmes" end>
              Populares
            </NavigationLink>
            {/* O link para Populares aponta para /filmes mas tem a prop end. Isso significa que se você navegar para /filmes/aclamados, o link "Populares" deixa de ser o "alvo exato" e perde o traço roxo, passando-o para o link de "Aclamados". */}
            <NavigationLink toPath="/filmes/aclamados">
              Aclamados pela crítica
            </NavigationLink>
            <NavigationLink toPath="/filmes/emBreve">Em Breve</NavigationLink>
          </>
        ) : (
          <>
            <NavigationLink toPath="/series" end>
              Em Alta
            </NavigationLink>
            <NavigationLink toPath="/series/aclamadas">
              Favoritas do Público
            </NavigationLink>
          </>
        )}
      </nav>

      <div className={styles.movieGrid}>
        {isLoading
          ? new Array(20)
              .fill(0)
              .map((_, index) => <Skeleton key={`skeleton-${index}`} />)
          : data?.results.map((item) => (
              <MovieCard
                movie={item}
                key={item.id}
                onSelect={() => openModal(item)}
              />
            ))}
      </div>

      <div className={styles.paginationContainer} aria-label="Paginação">
        <NavigationButton
          onClick={() => setPage((p) => p - 1)}
          page={page}
          direction="prev"
        />
        <InputPage
          onChange={(e) => setPage(Number(e.target.value))}
          value={String(page)}
        />
        <NavigationButton
          onClick={() => setPage((p) => p + 1)}
          page={page}
          direction="next"
        />
      </div>
    </main>
  );
};
