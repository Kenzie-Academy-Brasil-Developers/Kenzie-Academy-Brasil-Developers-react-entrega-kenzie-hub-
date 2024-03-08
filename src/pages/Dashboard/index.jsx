import { useContext } from "react";
import styles from "./styles.module.scss";
import { ExampleContext } from "../provides/UserContext";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { TechCard } from "../../components/TechCard";
import { TechContext } from "../provides/TechContext";
import { CreateTechModal } from "../../components/CreateTechModal";

export const Dashboard = () => {
  const { setUser, user } = useContext(ExampleContext);
  const { open } = useContext(TechContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("@TOKEN");
    setUser({});
    navigate("/");
  };
  return (
    <>
      {open ? <CreateTechModal /> : null}
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
      </div>
      <TechCard />
    </>
  );
};
