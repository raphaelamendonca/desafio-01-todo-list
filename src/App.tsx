import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { TaskList } from "./components/TaskList";

import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <Form />
      <main>
        <TaskList />
      </main>
    </div>
  );
}

export default App;
