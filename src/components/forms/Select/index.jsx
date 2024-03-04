import { forwardRef } from "react";
import styles from "./styles.module.scss";

export const Select = forwardRef(({ label, options, ...rest }, ref) => {
  return (
    <div className={styles.selectContainer}>
      <label className={styles.label}>{label}</label>
      <select ref={ref} className={styles.select} {...rest}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
});
