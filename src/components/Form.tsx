import { Button } from "./Button";
import { Input } from "./Input";

import styles from "./Form.module.css";

export function Form() {
  return (
    <form className={styles.form}>
      <Input />
      <Button />
    </form>
  );
}
