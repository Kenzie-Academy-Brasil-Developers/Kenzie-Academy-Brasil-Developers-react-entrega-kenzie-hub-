import styles from "./styles.module.scss";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { TechContext } from "../../../pages/provides/TechContext";


export const TechList = ({ tech }) => {
  const { deleteTech, setOpenEdit, setTechId } = useContext(TechContext);
  const handleDelete = () => {
    deleteTech(tech.id);
  };
  return (
    <>
      <li className={styles.techListItem}>
        <span className={styles.techTitle}>{tech.title}</span>
        <div className={styles.techActionsContainer}>
          <p className={styles.techStatus}>{tech.status}</p>
          <div className={styles.buttonsContainer}>
            <MdOutlineModeEdit
              className={styles.techEditButton}
              onClick={() => {
                setTechId(tech.id);
                setOpenEdit(true);
              }}
            />
            <FaRegTrashAlt
              className={styles.techDeleteButton}
              onClick={handleDelete}
            />
          </div>
        </div>
      </li>
    </>
  );
};
