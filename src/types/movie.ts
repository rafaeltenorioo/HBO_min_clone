// Usei uma interface comum com dados quem voltam iguais e extendi para casos específicos (movie e tv)

export interface BaseMedia {
    id: number;
    overview: string;
    vote_average: number;
    poster_path: string | null;
    genre_ids: number[]

}

export interface Movie extends BaseMedia { 
    title: string;
    release_date: string;
}

export interface TVShow extends BaseMedia { 
    name: string
    first_air_date: string;
}

// A união... onde dizemos que um item da lista pode ser filme ou tv
export type MediaItem = Movie | TVShow

export interface MovieResponse {
    page: number;
    results: MediaItem[]; // Pode ser de Movie ou TVShow
    total_pages: number;
    total_results: number;
} 

export type MovieCategory = 'popular' | 'top_rated' | 'upcoming' | 'on_the_air';

export type MediaType = 'tv' | 'movie'