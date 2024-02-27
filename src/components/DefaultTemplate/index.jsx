import { useNavigate } from "react-router-dom";
import { Header } from "../Header";
import styles from "./styles.module.scss";

export const DefaultTemplate = ({
  children,
  button,
  setButton,
  isDashboard, setUser
}) => {
  const navigate = useNavigate();
  const pageLogin = () => {
    navigate("/login");
    setButton(false);
  };

  return (
    <>
      <div className={styles.headerContainer}>
        <Header button={button} isDashboard={isDashboard} setUser={setUser}>
          {button ? (
            <button
              className={styles.button}
              onClick={() => {
                setButton(false);
                pageLogin();
              }}
            >
              voltar
            </button>
          ) : ""} 
        </Header>
      </div>

      <div className={styles.defaultContainer}>{children}</div>
    </>
  );
};
