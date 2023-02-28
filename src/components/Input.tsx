import styles from "./Input.module.css";

export function Input() {
  return (
    <div className={styles.inputDiv}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className={styles.inputArea}
      ></input>
    </div>
  );
}
