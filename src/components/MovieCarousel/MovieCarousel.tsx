import type { MediaItem } from "@/types/movie";
import { useRef } from "react";
import { MovieCard } from "../MovieCard/MovieCard";

import styles from "./MovieCarousel.module.css";
import { useModal } from "@/hooks/useModal";
import { NavigationButton } from "../NavigationButton/NavigationButton";
import { Skeleton } from "../Skeleton/Skeleton";

type Direction = "left" | "right";

interface MovieCarouselProps {
  data: MediaItem[];
  isLoading: boolean;
}
export const MovieCarousel = ({ data, isLoading }: MovieCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const { openModal } = useModal();

  const handleScroll = (direction: Direction) => {
    if (!carouselRef.current) return;

    const { current } = carouselRef;
    // ClientWidth é a largura exata da parte visível do carrosel
    const scrollAmount = current.clientWidth;

    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.container_NavigationButtonLeft}>
        <NavigationButton
          onClick={() => handleScroll("left")}
          size={40}
          direction="prev"
        />
      </div>

      <div className={styles.carousel} ref={carouselRef}>
        {isLoading
          ? new Array(20)
              .fill(0)
              .map((_, index) => <Skeleton key={`skeleton-${index}`} />)
          : data?.map((movie, index) => (
              <div key={movie.id} className={styles.container_carousel}>
                <MovieCard
                  movie={movie}
                  onSelect={() => openModal(movie)}
                  index={index}
                />
              </div>
            ))}
      </div>

      <div className={styles.container_NavigationButtonRight}>
        <NavigationButton
          onClick={() => handleScroll("right")}
          size={40}
          direction="next"
        />
      </div>
    </section>
  );
};
