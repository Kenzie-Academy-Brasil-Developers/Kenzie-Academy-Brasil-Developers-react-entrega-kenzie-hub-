import { useContext } from "react";
import styles from "./styles.module.scss";
import { ExampleContext } from "../provides/context";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const { setUser, user } = useContext(ExampleContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("@TOKEN");
    setUser({});
    navigate("/");
  };
  return (
    <>
      <div className={styles.headerContainer}>
        <Header isButton={true}>
          <button className={styles.button} onClick={() => handleLogout()}>
            Sair
          </button>
        </Header>
      </div>
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardContent}>
          <div className={styles.welcomeMessage}>
            <h3 className={styles.title}>Olá, {user?.name}</h3>
            <p className={styles.moduleInfo}>{user?.course_module}</p>
          </div>
        </div>
        <div className={styles.developmentMessage}>
          <h3 className={styles.developmentWarning}>
            Que pena! Estamos em desenvolvimento :(
          </h3>
          <h4 className={styles.developmentInfo}>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </h4>
        </div>
      </div>
    </>
  );
};
