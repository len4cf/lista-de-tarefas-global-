import { useState, useEffect } from "react";
import Task from "../Task";
import NavBar from "../NavBar";

const Listar = () => {
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

  const numberComplete = tasks.filter((t) => t.done).length;
  const numberTotal = tasks.length;

  function renameTask(index, newName) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    });
  }

  return (
    <div>
      <NavBar />
      <h1>Listar</h1>
      <main>
        <h1 className="listar-progresso">
          <span className="listar-progresso-numero">{numberComplete}/{numberTotal}</span> Tarefas concluídas
        </h1>
        {tasks.map((task, index) => (
          <Task
            key={index}
            name={`${index + 1} ${task.name}`}
            done={task.done}
            onRename={(newName) => renameTask(index, newName)}
            onTrash={() => removeTask(index)}
            onToggle={(done) => updateTaskDone(index, done)}
          />
        ))}
      </main>
    </div>
  );
};

export default Listar;
