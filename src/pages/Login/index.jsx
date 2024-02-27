import { LoginForm } from "../../components/forms/LoginForm";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Login = ({ setButton, setUser }) => {
  const navigate = useNavigate();

  const pageRegister = () => {
    navigate("/register");
    setButton(true);
  };
 

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Login</h2>
          </div>
          <section className={styles.sectionContainer}>
            <div className={styles.sectionContent}>
              <LoginForm setUser={setUser} />
              <div className={styles.registerContainer}>
                <Link
                  onClick={() => setButton(true)}
                  to={"/register"}
                  className={styles.toRegister}
                >
                  Ainda não possui uma conta?
                </Link>
                <button
                  onClick={pageRegister}
                  className={styles.buttonRegister}
                >
                  Cadastre-se
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
