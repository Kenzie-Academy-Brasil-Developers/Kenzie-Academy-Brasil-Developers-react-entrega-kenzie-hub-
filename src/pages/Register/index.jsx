import { useForm } from "react-hook-form";
import { Input } from "../../components/forms/Input";
import { Select } from "../../components/forms/Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "./RegisterSchema";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { userApi } from "../../services/api";
import { Header } from "../../components/Header";

export const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  const postUsers = async (formData) => {
    try {
      const { data } = await userApi.post("/users", formData);
      toast.success("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (error) {
      error.response.data.message === "Email already exists"
        ? toast.error("Email já cadastrado")
        : toast.error("Falha em cadastrar");
    }
  };

  const onSubmit = async (data) => {
    await postUsers(data);
  };

  const home = () => {
    navigate("/");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header isButton={true}>
            <button className={styles.button} onClick={() => home()}>
              Voltar
            </button>
          </Header>
        </div>
        <div className={styles.content}>
          <div className={styles.registerContainer}>
            <div className={styles.textContainer}>
              <h2 className={styles.title}>Crie sua conta</h2>
              <p className={styles.paragraph}>Rapido e grátis, vamos nessa</p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <Input
                label="Nome"
                type="text"
                {...register("name")}
                placeholder="Digite aqui seu nome"
              />
              <p className={styles.paragraph}>{errors.name?.message}</p>
              <Input
                label="Email"
                type="email"
                {...register("email")}
                placeholder="Digite aqui seu email"
              />
              <p className={styles.paragraph}>{errors.email?.message}</p>
              <Input
                label="Senha"
                type="password"
                {...register("password")}
                placeholder="Digite aqui sua senha"
              />
              <p className={styles.paragraph}>{errors.password?.message}</p>
              <Input
                label="Senha"
                type="password"
                {...register("confirmPassword")}
                placeholder="Digite novamente sua senha"
              />
              <p className={styles.paragraph}>
                {errors.confirmPassword?.message}
              </p>
              <Input
                label="Bio"
                type="text"
                {...register("bio")}
                placeholder="Fale sobre você"
              />
              <p className={styles.paragraph}>{errors.bio?.message}</p>
              <Input
                label="Contato"
                type="text"
                {...register("contact")}
                placeholder="Opção de contato"
              />
              <p className={styles.paragraph}>{errors.contact?.message}</p>
              <Select
                label="Selecionar módulo"
                {...register("course_module")}
                options={[
                  {
                    label: "Primeiro Módulo",
                    value: "Primeiro módulo (Introdução ao Frontend)",
                  },
                  {
                    label: "Segundo Módulo",
                    value: "Segundo módulo (Frontend Avançado)",
                  },
                  {
                    label: "Terceiro Módulo",
                    value: "Terceiro módulo (Introdução ao Backend)",
                  },
                  {
                    label: "Quarto Módulo",
                    value: "Quarto módulo (Backend Avançado)",
                  },
                ]}
              />
              <p className={styles.paragraph}>
                {errors.course_module?.message}
              </p>
              <button type="submit" className={styles.buttonRegister}>
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      </div>
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
