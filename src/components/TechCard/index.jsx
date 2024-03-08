import { useContext } from "react";
import { TechList } from "./TechList";
import { TechContext } from "../../pages/provides/TechContext";
import styles from "./styles.module.scss";
import { IoAdd } from "react-icons/io5";
import { EditTechModal } from "../EditTechModal";

export const TechCard = () => {
  const { setOpen, tech, openEdit } = useContext(TechContext);

  return (
    <div className={styles.techSectionContainer}>
      {openEdit ? <EditTechModal /> : null}
      <section className={styles.techSection}>
        <div className={styles.techHeader}>
          <h2 className={styles.techTitle}>Tecnologias</h2>
          <button
            className={styles.techAddButton}
            onClick={() => setOpen(true)}
          >
            +
          </button>
        </div>
        <ul className={styles.techList}>
          {tech.map((techItem) => (
            <TechList key={techItem.id} tech={techItem} />
          ))}
        </ul>
      </section>
    </div>
  );
};
