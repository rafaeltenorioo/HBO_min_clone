import styles from "./InputPage.module.css";
interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const InputPage = ({ onChange, value }: InputProps) => {
  return (
    <div className={styles.inputContainer}>
      <span className={styles.label}>Pág.</span>
      <input
        className={styles.inputField}
        type="number"
        value={value}
        min={1}
        max={350}
        onChange={onChange}
        aria-label="Digite a página"
      />
    </div>
  );
};
