import type { MediaItem, Movie, TVShow } from "@/types/movie";

export const isMovie = (media: MediaItem): media is Movie => {
  return (media as Movie).title !== undefined;

  // Retornará true se media tiver um 'title' (se for movie)
};

export const getMediaTitle = (media: MediaItem): string => {
  if (isMovie(media)) {
    return media.title;
  }
  return (media as TVShow).name;
};

export const getMediaDate = (media: MediaItem): string => {
  if (isMovie(media)) {
    return media.release_date;
  }
  return (media as TVShow).first_air_date;
};

export const getImageUrl = (
  path: string | null,
  size: "w185" | "w342" | "w500" = "w500",
) => {
  if (!path) return "";
  return `https://image.tmdb.org/t/p/${size}${path}`;
};
