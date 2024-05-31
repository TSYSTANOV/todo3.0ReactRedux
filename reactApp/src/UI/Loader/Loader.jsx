import styles from "./Loader.module.css";

function Loader() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <div className={styles.loader}></div>
    </div>
  );
}
export { Loader };
