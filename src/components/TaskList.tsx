import { Task } from "./Task";
import styles from "./TaskList.module.css";
import notebookIcon from "../assets/notebook-icon.svg";

export function TaskList() {
  return (
    <div className={styles.container}>
      <span className={styles.createdTasks}>
        Tarefas criadas <span>5 </span>
      </span>
      <span className={styles.completedTasks}>
        Concluídas <span>2 de 5</span>
      </span>
      <div className={styles.tasks}>
        <img src={notebookIcon} alt="" className="src" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
