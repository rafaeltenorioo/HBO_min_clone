import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import styles from "./NavigationButton.module.css";

// Estendemos ButtonHTML... para herdar props nativas do HTML no componente NavigationButton (disabled, aria-label, etc).
interface NavigationButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: "prev" | "next";
  size?: number;
  page?: number;
  totalPages?: number;
}

export const NavigationButton = ({
  direction,
  size = 24,
  page,
  totalPages = 350,
  disabled,
  onClick,
  ...rest
}: NavigationButton) => {
  const isDisabled =
    disabled !== undefined
      ? disabled
      : page !== undefined
        ? direction === "prev"
          ? page <= 1
          : page >= totalPages
        : false;

  const ariaLabel = direction === "prev" ? "Voltar" : "Avançar";

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`${styles.btPagination} ${direction}`}
      aria-label={ariaLabel}
      {...rest}
    >
      {direction === "prev" ? (
        <MdChevronLeft size={size} />
      ) : (
        <MdChevronRight size={size} />
      )}
    </button>
  );
};
