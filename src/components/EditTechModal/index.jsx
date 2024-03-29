import { useContext } from "react";
import styles from "./styles.module.scss";
import { TechContext } from "../../pages/provides/TechContext";
import { Select } from "../forms/Select";
import { useForm } from "react-hook-form";
import { Input } from "../forms/Input";

export const EditTechModal = () => {
  const { editingTech, setOpenEdit } = useContext(TechContext);

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({});

  const onSubmit = (data) => {
    editingTech(data);
    reset();
    setOpenEdit(false);
  };

  return (
    <div className={styles.modalContent}>
      <div className={styles.modalContainer}>
        <div className={styles.headerContainer}>
          <h3 className={styles.title}>Tecnologia Detalhes</h3>
          <button
            className={styles.closeButton}
            onClick={() => setOpenEdit(false)}
          >
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
              placeholder= "Material UI"
              disabled={true}
              
            />
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
            Salvar alterações
          </button>
        </form>
      </div>
    </div>
  );
};
