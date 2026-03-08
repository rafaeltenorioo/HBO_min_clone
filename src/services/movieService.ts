// Arquivos de serviço (.ts) NUNCA retornam JSX (HTML). Eles retornam DADOS (Promises, Objetos, Arrays). Quem cuida de <div> é o componente (.tsx).

import type { MediaType, MovieCategory, MovieResponse } from "@/types/movie";
import api from "./api";


export const getMovies = async (media: MediaType, category: MovieCategory, page: number): Promise<MovieResponse> => {
  const response = await api.get<MovieResponse>(`/${media}/${category}`, {
    params: {
      page, 
    }
  })

  return response.data
}

// Ao colocar <MovieResponse> depois do .get, estou dizendo: O axios vai devolver um JSON, eu juro que esse JSON tem o formato de MovieResponse. 
