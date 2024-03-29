import React, { createContext, useEffect, useState } from "react";

export const taskContext = createContext();

export function TaskContext(props) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [del, setDel] = useState(-1);

  const [element, setElement] = useState({});

  function createTask(title, descripcion = "Mi tarea") {
    let id = 0;
    if (tasks.length > 0) {
      tasks.sort((a, b) => a.id - b.id);
      id = tasks[tasks.length - 1].id + 1;
    }
    let newTask = {
      id: id,
      title: title,
      descripcion: descripcion,
    };

    setTasks([...tasks, newTask]);
  }

  function deleteTask() {
    if (del != -1) {
      setTasks(tasks.filter((tag) => tag.id != del));
      setDel(-1);
    }
  }

  const handlerInfoReset = (e) => {
    e.stopPropagation();
    setElement({});
    setDel(-1);
    setDetail("");
    setTitle("");
  };
  return (
    <taskContext.Provider
      value={{
        createTask,
        tasks,
        setTasks,
        deleteTask,
        del,
        setDel,
        element,
        setElement,
        detail,
        setDetail,
        title,
        setTitle,
        handlerInfoReset,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
}
