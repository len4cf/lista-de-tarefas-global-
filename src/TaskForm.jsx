import { useState } from "react";
import { Link } from "react-router-dom";
import Check from './assets/check.svg'

export default function TaskForm({ onAdd }) {
  const [taskName, setTaskName] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Estado para a mensagem de sucesso

  function handleSubmit(ev) {
    ev.preventDefault();
    onAdd(taskName);
    setTaskName("");
    setSuccessMessage("Tarefa adicionada com sucesso"); // Define a mensagem de sucesso 

    setTimeout(() => {
      setSuccessMessage(""); // Limpa a mensagem de sucesso
    }, 1000);
  

  }

  function goToAdicionar() {
    history.push("/adicionar");
  }

  return (
    <div>
      {successMessage && <p className="success"><img src={Check} alt="" />{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <button>+</button>
        <input
          onClick={goToAdicionar}
          type="text"
          value={taskName}
          onChange={(ev) => setTaskName(ev.target.value)}
          placeholder="Adiciona uma tarefa..."
        />
      </form>
    </div>
  );
}
