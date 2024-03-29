import React from "react";
import { useContext } from "react";
import { taskContext } from "../../context/taskContext";

function CardTask({ detail }) {
  let { setDel, setElement, setDetail, setTitle } = useContext(taskContext);
  const handlerInfo= (e) =>{
    e.stopPropagation();
        setDel(detail.id);
        setElement(detail);
        setDetail(detail.descripcion);
        setTitle(detail.title);
  }
  return (
    <div
      key={detail.id}
      id={detail.id}
      className="task-container"
      onClick={handlerInfo}
    >
      <h2 className="task-title">{detail.title}</h2>
      <p className="task-description">{detail.descripcion}</p>
    </div>
  );
}

export default CardTask;
