import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Task } from "./components/Task";

import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <Form />
      <Task />
    </div>
  );
}

export default App;
