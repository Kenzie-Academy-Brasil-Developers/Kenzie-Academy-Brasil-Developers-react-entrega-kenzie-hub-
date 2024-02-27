import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { userApi } from "../../../services/api";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export const LoginForm = ({ setUser }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const postUsers = async (formData) => {
    try {
      const { data } = await userApi.post("/sessions", formData);
      setUser(data.user);
      localStorage.setItem("@TOKEN", data.token);
      navigate("/dashboard");
    } catch (error) {
      toast.error("Usuário ou senha estão incorretos.");
    }
  };

  const onSubmit = (formData) => {
    postUsers(formData);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          required
          label="Email"
          type="email"
          {...register("email")}
          placeholder="Digite seu email..."
        />
        <Input
          required
          label="Senha"
          type="password"
          {...register("password")}
          placeholder="Digite sua senha..."
        />
        <button type="submit" className={styles.buttonLogin}>
          Entrar
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
};
