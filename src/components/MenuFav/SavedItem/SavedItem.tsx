import type { MediaItem } from "@/types/movie";
import styles from "./SavedItem.module.css";
import { useModal } from "@/hooks/useModal";

interface SavedItem {
  item: MediaItem;
  imageUrl: string;
  title: string;
  onClick: () => void;
}

export const SavedItem = ({ item, imageUrl, title, onClick }: SavedItem) => {
  const { openModal } = useModal();

  return (
    <div key={item.id} className={styles.savedItem}>
      <img src={imageUrl} alt={title} onClick={() => openModal(item)} />
      <div className={styles.savedItem_content}>
        <span>{title}</span>
        <button onClick={onClick} className={styles.btDelete}>
          Excluir
        </button>
      </div>
    </div>
  );
};
