import { Button } from "./Button";
import { Input } from "./Input";

import styles from "./Form.module.css";
import { ChangeEvent, FormEvent } from "react";

function handleSubmit(event: FormEvent) {
  // evita que a página seja recarregada
  event.preventDefault();
}

export function Form() {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input />
      <Button />
    </form>
  );
}
