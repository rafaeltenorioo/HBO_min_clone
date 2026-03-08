import { Link } from "react-router";
import styles from "./SeeMore.module.css";
import { GoArrowRight } from "react-icons/go";

export const SeeMore = ({ path }: { path: string }) => {
  return (
    <Link to={path} className={styles.seeMore}>
      Ver Mais <GoArrowRight />
    </Link>
  );
};
