import React, { useContext, useEffect } from "react";
import CardTask from "./subComponet/CardTask";
import "../css/taskList.css";
import { taskContext } from "../context/taskContext";

function Task() {
  let { tasks, setTasks, setElement, setDel, setDetail, setTitle,handlerInfoReset } =
    useContext(taskContext);
  
  useEffect(() => setTasks(tasks), []);
  if (tasks.length == 0) {
    return (
      <div className="task-list">
        <h1 style={{ fontFamily: "inherit" }}>No hay tarea</h1>
      </div>
    );
  }
  return (
    <div className="task-list" onClick={handlerInfoReset}>
      {tasks.map((detail) => (
        <CardTask key={detail.id} detail={detail} />
      ))}
    </div>
  );
}

export default Task;
