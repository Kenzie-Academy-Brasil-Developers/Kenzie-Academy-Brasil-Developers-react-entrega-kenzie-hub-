import { useEffect } from "react";
import styles from "./styles.module.scss";

export const Dashboard = ({ setIsDashboard, user}) => {
  useEffect(() => {
    setIsDashboard(true);
    return () => {
      setIsDashboard(false);
    };
  }, []);
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardContent}>
        <div className={styles.welcomeMessage}>
          <h3 className={styles.title}>Olá, {user?.name}</h3>
          <p className={styles.moduleInfo}>
          {user?.course_module}
          </p>
        </div>
      </div>
      <div className={styles.developmentMessage}>
        <h3 className={styles.developmentWarning}>Que pena! Estamos em desenvolvimento :( </h3>
        <h4 className={styles.developmentInfo}>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </h4>
      </div>
    </div>
  );
};
