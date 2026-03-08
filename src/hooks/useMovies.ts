import { getMovies } from "@/services/movieService";
import type { MediaType, MovieCategory, MovieResponse } from "@/types/movie";
import { useQuery } from "@tanstack/react-query";

export const useMovies = (
  media: MediaType,
  category: MovieCategory,
  page: number,
) => {
  // Generics do useQuery: <TipoDoDado, TipoDoErro>

  // A query PRECISA incluir a página.
  // Se a chave for ['movies', 'popular', 1], e mudar para [..., 2], o React Query entende que é uma busca nova e dispara o loading.

  const query = useQuery<MovieResponse, Error>({
    queryKey: [media, category, page],
    queryFn: () => getMovies(media, category, page),
    staleTime: 1000 * 60 * 5,
  });
  return query;
};
