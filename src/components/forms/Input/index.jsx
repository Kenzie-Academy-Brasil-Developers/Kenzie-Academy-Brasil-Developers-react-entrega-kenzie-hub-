import styles from "./styles.module.scss";
import { forwardRef } from "react";

export const Input = forwardRef(({ label, ...rest }, ref) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input ref={ref} className={styles.input} {...rest} />
    </div>
  );
});
