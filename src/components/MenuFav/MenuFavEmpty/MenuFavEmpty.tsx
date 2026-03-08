import styles from "./ManuFavEmpty.module.css";

export const MenuFavEmpty = () => {
  return (
    <div className={styles.emptyState}>
      <p>Sua lista está vazia.</p>
      <span>Explore e salve seus títulos favoritos!</span>
    </div>
  );
};
