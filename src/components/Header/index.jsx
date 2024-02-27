import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export const Header = ({ children, button, isDashboard, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("@TOKEN");
    setUser({});
    navigate("/");
  };

  return (
    <div
      className={`${styles.headerContent} ${button ? styles.justify : ""}  ${
        isDashboard ? styles.isDashboard : null
      }`}
    >
      <h1 className={styles.headerTitle}>Kenzie Hub</h1>
      {isDashboard ? (
        <button onClick={handleLogout} className={styles.buttonLogout}>
          SAIR
        </button>
      ) : null}
      <div className={styles.main}>{children}</div>
    </div>
  );
};
