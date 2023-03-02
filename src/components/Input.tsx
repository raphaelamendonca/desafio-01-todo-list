import { ChangeEvent, useState } from "react";
import styles from "./Input.module.css";

export function Input() {
  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
  }

  return (
    <input
      type="text"
      placeholder="Adicione uma nova tarefa"
      className={styles.input}
      onChange={handleNewTaskChange}
    ></input>
  );
}
