import Task from "./component/TaskList";
import TaskForm from "./component/TaskForm";
import "./css/App.css";
import { useContext } from "react";
import { taskContext } from "./context/taskContext";

function App() {
  let { setElement, setDel } = useContext(taskContext);
  return (
    <div
      className="container"
      onDoubleClick={(e) => {
        e.stopPropagation();
        setElement({});
        setDel(-1);
      }}
    >
      <h1 className="title">Lista de Tareas</h1>
      <TaskForm />
      <Task />
    </div>
  );
}

export default App;
