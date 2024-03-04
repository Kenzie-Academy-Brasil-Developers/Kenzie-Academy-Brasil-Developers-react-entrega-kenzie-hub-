import styles from "./styles.module.scss";

export const Header = ({ children, isButton }) => {
  return (
    <div className={isButton && styles.headerContainer}>
      <h1 className={styles.headerTitle}> Kenzie Hub</h1>
      <div>{children}</div>
    </div>
  );
};
