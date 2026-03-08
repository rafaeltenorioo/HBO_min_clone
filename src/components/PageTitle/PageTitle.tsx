import styles from "./PageTitle.module.css";

export const PageTitle = ({ title }: { title: string }) => {
  return <h2 className={styles.title}>{title}</h2>;
};
