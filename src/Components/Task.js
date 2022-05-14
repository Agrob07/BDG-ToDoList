import React from "react";
const Task = (props) => {
  const {
    idx,
    task,
    isDone,
    isEdit,
    doneTask,
    deleteTask,
    editTask,
    selectedIdx,
    handleEdit,
    newtask,
    saveNewTask,
    doneIdx,
  } = props;

  return (
    <li className="task">
      <span className={isDone && doneIdx === idx ? "done" : "undone"}>
        {task}{" "}
      </span>
      <input
        type="text"
        value={newtask}
        className={isEdit && selectedIdx === idx ? "visible" : "hidden"}
        onChange={(e) => handleEdit(e)}
        maxLength="20"
      />
      <div className="buttons">
        <button
          className={isDone && doneIdx === idx ? "primary" : "success"}
          onClick={(e) => doneTask(e, idx)}
          disabled={isEdit ? true : false}
        >
          {isDone && doneIdx === idx ? "Undo" : "Done"}
        </button>
        {selectedIdx === idx ? (
          <button className="save" onClick={(e) => saveNewTask(e, idx)}>
            Save
          </button>
        ) : (
          <button
            className="edit"
            onClick={(e) => editTask(e, idx)}
            disabled={isEdit ? true : false}
          >
            Edit
          </button>
        )}
        <button
          className="danger"
          onClick={(e) => deleteTask(e, idx)}
          disabled={isEdit ? true : false}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
