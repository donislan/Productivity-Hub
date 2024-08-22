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
      <div className="modal-container">
        <span className="close" onClick={onClose}>
          &times; {/* Símbolo de fechar */}
        </span>
        <h2 className="title-modal">Adicionar Tarefa:</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="reminder-text">Lembrete:</label>
          <div>
            <textarea
              id="reminder-text"
              rows="4"
              placeholder="Digite seu lembrete aqui..."
            ></textarea>
          </div>
          <Btn type="submit" id="btn" name="Enviar" />
        </form>
      </div>
    </section>
  );
}
