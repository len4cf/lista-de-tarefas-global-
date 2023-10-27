import TaskForm from "../TaskForm";
import { useEffect, useState } from "react";
import NavBar from "../NavBar";

const Adicionar = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks || []);
  }, []);

  function addTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  return (
    <div>
      <NavBar />
      <h1>Adicionar</h1>
      <main>
        <TaskForm onAdd={addTask} />
      </main>
    </div>
  );
};

export default Adicionar;
