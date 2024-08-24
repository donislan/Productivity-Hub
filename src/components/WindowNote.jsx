// src/components/WindowNote.jsx
import React from "react";
import Btn from "./Btn";
import "../css/window-note-style.css";

export default function WindowNote({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica para lidar com a submissão do lembrete
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
          <input type="text" name="title" id="title" />
        </div>

        <label htmlFor="reminder-text">Lembrete:</label>
        <div>
          <textarea
            id="reminder-text"
            rows="4"
            placeholder="Digite seu lembrete aqui..."
          ></textarea>
        </div>

        <div className="area-radios">
          <input
            type="radio"
            id="alta-prioridade"
            name="prioridade"
            value="Alta"
            className="radios"
          />
          <label htmlFor="alta-prioridade">ALTA PRIORIDADE</label>
          <br />

          <input
            type="radio"
            id="media-prioridade"
            name="prioridade"
            value="Média"
            className="radios"
          />
          <label htmlFor="media-prioridade">PRIORIDADE MÉDIA</label>
          <br />

          <input
            type="radio"
            id="baixa-prioridade"
            name="prioridade"
            value="Baixa"
            className="radios"
          />
          <label htmlFor="baixa-prioridade">BAIXA PRIORIDADE</label>
        </div>

        <Btn type="submit" id="btn" name="Enviar" />
      </form>
    </section>
  );
}
