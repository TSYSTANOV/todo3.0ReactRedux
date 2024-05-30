import styles from "./MyModal.module.css";
function MyModal({ children, visible, setVisible }) {
  const rootClasses = [styles.myModal];
  if (visible) {
    rootClasses.push(styles.active);
  }
  return (
    <div
      className={rootClasses.join(" ")}
      onClick={(e) => {
        setVisible(false);
      }}
    >
      <div
        className={styles.myModalContent}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
}
export { MyModal };
