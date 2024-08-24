import React, { useState } from "react";
import Btn from "./Btn";
import "../css/window-note-style.css";

export default function WindowNote({ isOpen, onClose, addReminder }) {
  if (!isOpen) return null;

  const [title, setTitle] = useState("");
  const [reminderText, setReminderText] = useState("");
  const [priority, setPriority] = useState("Média");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || reminderText.trim() === "") {
      alert("Por favor, preencha o título e o lembrete.");
      return;
    }
    addReminder({ title, reminderText, priority });
    onClose();
    setTitle("");
    setReminderText("");
    setPriority("Média");
  };

  return (
    <section className="modal">
      <form className="modal-container" onSubmit={handleSubmit}>
        <span className="close" onClick={onClose}>
          &times; {/* Símbolo de fechar */}
        </span>
        <h2 className="title-modal">Adicionar Tarefa:</h2>
        <div className="area-title">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <label htmlFor="reminder-text">Lembrete:</label>
        <div>
          <textarea
            id="reminder-text"
            rows="4"
            placeholder="Digite seu lembrete aqui..."
            value={reminderText}
            onChange={(e) => setReminderText(e.target.value)}
          ></textarea>
        </div>

        <div className="area-radios">
          <input
            type="radio"
            id="alta-prioridade"
            name="prioridade"
            value="Alta"
            className="radios"
            checked={priority === "Alta"}
            onChange={(e) => setPriority(e.target.value)}
          />
          <label htmlFor="alta-prioridade">ALTA PRIORIDADE</label>
          <br />

          <input
            type="radio"
            id="media-prioridade"
            name="prioridade"
            value="Média"
            className="radios"
            checked={priority === "Média"}
            onChange={(e) => setPriority(e.target.value)}
          />
          <label htmlFor="media-prioridade">PRIORIDADE MÉDIA</label>
          <br />

          <input
            type="radio"
            id="baixa-prioridade"
            name="prioridade"
            value="Baixa"
            className="radios"
            checked={priority === "Baixa"}
            onChange={(e) => setPriority(e.target.value)}
          />
          <label htmlFor="baixa-prioridade">BAIXA PRIORIDADE</label>
        </div>

        <Btn type="submit" id="btn" name="Enviar" />
      </form>
    </section>
  );
}
