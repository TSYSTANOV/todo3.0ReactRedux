import styles from "./MyButton.module.css";
function MyButton({ children, ...props }) {
  return (
    <button {...props} className={styles.myBtn}>
      {children}
    </button>
  );
}
export { MyButton };
