import { Checkbox } from "./Checkbox";
import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <Checkbox />
      <span className={styles.taskDescription}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </span>
      <Trash size={20} className={styles.trashIcon} />
    </div>
  );
}
