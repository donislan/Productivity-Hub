// src/App.jsx
import React, { useState } from "react";
import Btn from "./components/Btn";
import Name from "./components/Name";
import TitleSection from "./components/TitleSection";
import WindowNote from "./components/WindowNote";
import Time from "./components/Time";
import Calender from "./components/Calender";
import Layout01 from "./images/layout-01.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./css/style.css";

export default function App() {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  const [note, setNote] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNote = () => {
    const maxLength = 160;
    if (note.length > maxLength || note.length === 0) {
      alert(
        "Nota grande demais ou vazia. Experimente uma nota de até 160 caracteres!"
      );
    } else {
      const id = Math.floor(Math.random() * 1000000);
      const NewNote = { id, note };
      const upDatedNotes = [...notes, NewNote];
      setNotes(upDatedNotes);
      localStorage.setItem("notes", JSON.stringify(upDatedNotes));
      setNote("");
    }
  };

  const removeNote = (id) => {
    const upDatedNotes = notes.filter((n) => n.id !== id);
    setNotes(upDatedNotes);
    localStorage.setItem("notes", JSON.stringify(upDatedNotes));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="main-container">
      <header className="header">
        <div className="area-main-title areas">
          <TitleSection title="Productivity Hub" />
        </div>
        <div className="area-profile-infos areas">
          <p className="text-hello">
            Olá, <Name name="Adonislan Alves da Silva" /> Estamos prontos para
            trabalhar!
          </p>
        </div>
      </header>

      <section className="container-01">
        <article className="area-fast-notes">
          <h4 className="title-fast-notes">Bloco de Notas Curtas:</h4>
          <div className="area-fast-note">
            <textarea
              name="text"
              id="text-fast-note"
              placeholder="Escreva uma nota rápida"
              maxLength={200}
              rows={5}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
            <Btn type="button" id="btn" name="Enviar" onClick={addNote} />
            <div className="area-card-fast-note">
              <ul>
                {notes.map((n) => (
                  <li className="card-fast-note" key={n.id}>
                    <p className="text-fast-note">{n.note}</p>
                    <button
                      className="btn-remove"
                      onClick={() => removeNote(n.id)}
                      aria-label="Remover Nota"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </section>

      <section className="container-02">
        <div className="area-main-title">
          <TitleSection title="Tarefas Importantes" />
        </div>
        <figure className="figure-deco">
          <img src={Layout01} alt="Foto-Estilização" className="img-plant" />
        </figure>
        <div className="area-cards-activity">
          {/* Renderize o conteúdo de tarefas importantes aqui */}
        </div>
        <div className="area-btn-add-activity">
          <button className="btn-activity" onClick={openModal}>
            +
          </button>
        </div>
      </section>

      <section className="container-03">
        <div>
          <Time />
          <Calender />
        </div>
      </section>

      <section className="container-04">
        <div>O4</div>
      </section>

      <section className="container-05">
        <div>05</div>
      </section>

      <section className="container-06">
        <div>06</div>
      </section>

      <section className="container-07">
        <div>07</div>
      </section>

      <WindowNote isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
