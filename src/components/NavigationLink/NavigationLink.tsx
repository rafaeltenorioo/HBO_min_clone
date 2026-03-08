import { NavLink } from "react-router";
import styles from "./NavigationLink.module.css";

interface NavigationLinkProps {
  children: string;
  toPath: string;
  end?: boolean;
}

export const NavigationLink = ({
  children,
  toPath,
  end = false,
}: NavigationLinkProps) => {
  return (
    <NavLink
      to={toPath}
      end={end} // Serve para o link de 'Populares' ñ ficar ativos junto com 'Aclamados...'
      className={({ isActive }) =>
        isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
      }
    >
      {children}
    </NavLink>
  );
};
