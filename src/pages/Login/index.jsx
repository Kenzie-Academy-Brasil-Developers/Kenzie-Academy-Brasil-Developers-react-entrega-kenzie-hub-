import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  const navigate = useNavigate();

  const pageRegister = () => {
    navigate("/register");
  };

  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.loginContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Login</h2>
        </div>
        <section className={styles.sectionContainer}>
          <div className={styles.sectionContent}>
            <LoginForm />
            <div className={styles.registerContainer}>
              <Link to={"/register"} className={styles.toRegister}>
                Ainda não possui uma conta?
              </Link>
              <button onClick={pageRegister} className={styles.buttonRegister}>
                Cadastre-se
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
