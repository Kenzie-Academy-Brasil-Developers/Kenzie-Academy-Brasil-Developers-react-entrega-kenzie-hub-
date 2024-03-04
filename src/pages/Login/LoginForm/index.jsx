import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import { LoginSchema } from "./LoginSchema";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "../../../components/forms/Input";
import { userApi } from "../../../services/api";
import { useContext } from "react";
import { ExampleContext } from "../../provides/context";
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(ExampleContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

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
          label="Email"
          type="email"
          {...register("email")}
          placeholder="Digite seu email..."
        />
        <p className={styles.paragraph}>{errors.email?.message}</p>
        <Input
          label="Senha"
          type="password"
          {...register("password")}
          placeholder="Digite sua senha..."
        />
        <p className={styles.paragraph}>{errors.password?.message}</p>
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
