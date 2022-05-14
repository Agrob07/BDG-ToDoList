import React, { useState } from "react";

import Task from "./Task";

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [newTask, setNewTask] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(-1);
  const [doneIdx, setDoneIdx] = useState(-1);
  const [taskList, setTaskList] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  function handleChange(e) {
    e.preventDefault();
    setTask(e.target.value);
  }

  function handleEdit(e) {
    e.preventDefault();
    e.target.value && setNewTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    task ? setTaskList([...taskList, task]) : alert("Enter task");
    setTask("");
  }

  function deleteTask(e, idx) {
    e.preventDefault();
    let filterlist = taskList.filter((task, index) => {
      return index !== idx;
    });
    setTaskList(filterlist);
  }

  function doneTask(e, idx) {
    e.preventDefault();
    setDoneIdx(idx);
    setIsDone(!isDone);
  }

  function editTask(e, idx) {
    e.preventDefault();
    setSelectedIdx(idx);
    setIsEdit(!isEdit);
  }

  function saveNewTask(e, idx) {
    const temp = [...taskList];
    if (newTask) {
      temp[idx] = newTask;
      setTaskList(temp);
      setIsEdit(false);
      setSelectedIdx(-1);
    }
  }
  return (
    <div className="taskList">
      <form className="addTask" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={task}
          onChange={(e) => handleChange(e)}
          maxLength="20"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul className="taskCatalogue">
        {taskList.map((task, idx) => {
          return (
            <Task
              key={idx}
              idx={idx}
              task={task}
              isDone={isDone}
              isEdit={isEdit}
              doneTask={doneTask}
              editTask={editTask}
              deleteTask={deleteTask}
              selectedIdx={selectedIdx}
              newTask={newTask}
              handleEdit={handleEdit}
              saveNewTask={saveNewTask}
              doneIdx={doneIdx}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
