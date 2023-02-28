import styles from "./Header.module.css";

import toDoLogo from "../assets/toDo-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt="Logo do ToDo" />
      <h1 className={styles.title}>
        to<span>do</span>
      </h1>
    </header>
  );
}
