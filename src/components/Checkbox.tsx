import styles from "./Checkbox.module.css";

export function Checkbox() {
  return (
    <label htmlFor="checkbox" className={styles.checkbox}>
      <input type="checkbox" id="checkbox" />
      <span className={styles.checkmark}></span>
    </label>
  );
}
