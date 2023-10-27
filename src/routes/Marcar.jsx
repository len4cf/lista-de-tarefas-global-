import React from "react";
import Checkbox from "../Checkbox";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import { useState, useEffect } from "react";

const Marcar = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks || []);
  }, []);


  function removeTask(indexToRemove) {
    setTasks((prev) => {
      return prev.filter((taskObject, index) => index !== indexToRemove);
    });
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  function renameTask(index, newName) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    });
  }

  function TaskMarcar({ name, done, onToggle, onTrash }) {
    return (
      <div className={"task " + (done ? "done" : "")}>
        <Checkbox checked={done} onClick={() => onToggle(!done)} />
        <div className="task-name">
          <span>{name}</span>
        </div>
        <button className="trash" onClick={onTrash}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <h1>Marcar</h1>
      <main>
        {tasks.map((task, index) => (
            <TaskMarcar
              {...task}
              onRename={(newName) => renameTask(index, newName)}
              onTrash={() => removeTask(index)}
              onToggle={(done) => updateTaskDone(index, done)}
            />
          ))}

      </main>
    </>
  );
};

export default Marcar;
