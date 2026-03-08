import { MovieCarousel } from "@/components/MovieCarousel/MovieCarousel";
import { useMovies } from "@/hooks/useMovies";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import styles from "./Home.module.css";
import { SeeMore } from "./SeeMore/SeeMore";

export const Home = () => {
  const { data: moviesPopular, isLoading: isLoadingPopMovie } = useMovies(
    "movie",
    "popular",
    1,
  );

  const { data: tvPopular, isLoading: isLoadingPopTv } = useMovies(
    "tv",
    "popular",
    1,
  );

  const { data: moviesTopRated, isLoading: isLoadingTopMovie } = useMovies(
    "movie",
    "top_rated",
    1,
  );

  const { data: tvTopRated, isLoading: isLoadingTopTv } = useMovies(
    "tv",
    "top_rated",
    1,
  );

  const { data: moviesUpcoming, isLoading: isLoadingUpcoming } = useMovies(
    "movie",
    "upcoming",
    1,
  );

  return (
    <main>
      {moviesPopular?.results && (
        <div>
          <div className={styles.container_title_link}>
            <PageTitle title="Filmes Populares" />
            <SeeMore path="/filmes" />
          </div>
          <MovieCarousel
            data={moviesPopular.results}
            isLoading={isLoadingPopMovie}
          />
        </div>
      )}

      {moviesTopRated?.results && (
        <div>
          <div className={styles.container_title_link}>
            <PageTitle title="Filmes aclamados pela crítica" />
            <SeeMore path="/filmes/aclamados" />
          </div>
          <MovieCarousel
            data={moviesTopRated.results}
            isLoading={isLoadingTopMovie}
          />
        </div>
      )}

      {tvPopular?.results && (
        <div>
          <div className={styles.container_title_link}>
            <PageTitle title="Séries em Alta" />
            <SeeMore path="/series" />
          </div>
          <MovieCarousel data={tvPopular.results} isLoading={isLoadingPopTv} />
        </div>
      )}

      {tvTopRated?.results && (
        <div>
          <div className={styles.container_title_link}>
            <PageTitle title="Séries aclamadas pela crítica" />
            <SeeMore path="/series/aclamadas" />
          </div>
          <MovieCarousel data={tvTopRated.results} isLoading={isLoadingTopTv} />
        </div>
      )}

      {moviesUpcoming?.results && (
        <div>
          <div className={styles.container_title_link}>
            <PageTitle title="Filmes em Breve" />

            <SeeMore path="/filmes/emBreve" />
          </div>
          <MovieCarousel
            data={moviesUpcoming.results}
            isLoading={isLoadingUpcoming}
          />
        </div>
      )}
    </main>
  );
};
