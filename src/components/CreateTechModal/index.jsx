import { useContext } from "react";
import styles from "./styles.module.scss";
import { TechContext } from "../../pages/provides/TechContext";
import { Select } from "../forms/Select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CreateTechSchema from "./CreateTechSchema";
import { Input } from "../forms/Input";

export const CreateTechModal = () => {
  const { setOpen, addTech } = useContext(TechContext);

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({
    resolver: zodResolver(CreateTechSchema),
  });

  const onSubmit = (data) => {
    addTech(data);
    reset();
    setOpen(false);
  };

  return (
    <div className={styles.modalContent}>
      <div className={styles.modalContainer}>
        <div className={styles.headerContainer}>
          <h3 className={styles.title}>Cadastrar Tecnologia</h3>
          <button className={styles.closeButton} onClick={() => setOpen(false)}>
            X
          </button>
        </div>
        <form
          className={styles.formContainer}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.inputGroup}>
            <Input
              label="Nome"
              type="text"
              {...register("title")}
              placeholder="Digite o nome da tecnologia..."
            />
            <p className={styles.paragraph}>{errors.title?.message}</p>
          </div>
          <div className={styles.selectContainer}>
            <Select
              label="Selecionar status"
              {...register("status")}
              options={[
                {
                  label: "Iniciante",
                  value: "Iniciante",
                },
                {
                  label: "Intermediário",
                  value: "Intermediário",
                },
                {
                  label: "Avançado",
                  value: "Avançado",
                },
              ]}
            />
          </div>
          <button type="submit" className={styles.button}>
            Cadastrar Tecnologia
          </button>
        </form>
      </div>
    </div>
  );
};
