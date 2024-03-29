import React, { useContext, useEffect, useState } from "react";
import "../css/taskForm.css";
import { taskContext } from "../context/taskContext";

function TaskForm() {
  let {
    createTask,
    deleteTask,
    del,
    tasks,
    element,
    setTasks,
    detail,
    setDetail,
    title,
    setTitle,
    handlerInfoReset,
  } = useContext(taskContext);

  const [ready, setReady] = useState("");

  const handlerDetails = (text) => {
    setReady(text);
    setTimeout(() => {
      setReady("");
    }, 3000);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (title == "" || detail == "") return true;
    createTask(title, detail);
    setDetail("");
    setTitle("");
    handlerDetails("Tarea guardada");
  };

  const putTask = () => {
    if (
      del != -1 &&
      title.replace(" ", "") != "" &&
      detail.replace(" ", "") != ""
    ) {
      deleteTask();
      setTasks(
        [
          {
            id: element.id,
            title: title,
            descripcion: detail,
          },
        ],
        ...tasks
      );
      setDetail("");
      setTitle("");
    }
  };

  const handlerDelete = (e) => {
    if (del != -1) {
      deleteTask();
      handlerInfoReset(e);
      handlerDetails("Tarea eliminada");
    }
  };

  return (
    <form className="form-container" onSubmit={(e) => handlerSubmit(e)}>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        className="form-input_text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="Detalle de la tarea"
        className="form-input_text"
        onChange={(e) => setDetail(e.target.value)}
        value={detail}
      />
      <div className="form-input_container">
        <input type="submit" value="Guardar" className="form-input_btn " />
        <input
          type="button"
          value="Modificar"
          onClick={putTask}
          className={
            "form-input_btn form-input_btn-put " + (del == -1 ? "btn-off" : "")
          }
          required
        />
        <input
          type="button"
          value="Eliminar"
          onClick={handlerDelete}
          className={
            "form-input_btn form-input_btn-put " + (del == -1 ? "btn-off" : "")
          }
          required
        />
      </div>

      <div
        className={
          ready != "Tarea eliminada" ? "form-details" : "form-details del"
        }
      >
        <span className={ready ? "opacity-obj" : ""}>{ready}</span>
      </div>
    </form>
  );
}

export default TaskForm;
