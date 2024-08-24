import React, { useState } from "react";
import Btn from "./components/Btn";
import Name from "./components/Name";
import TitleSection from "./components/TitleSection";
import WindowNote from "./components/WindowNote";
import Time from "./components/Time";
import Design01 from "../src/images/design-01.png";
import Calender from "./components/Calender";
import Calculator from "./components/Calculator";

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

  const [reminders, setReminders] = useState(() => {
    const storedReminders = localStorage.getItem("reminders");
    return storedReminders ? JSON.parse(storedReminders) : [];
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addReminder = (newReminder) => {
    const id = Math.floor(Math.random() * 1000000);
    const updatedReminders = [...reminders, { id, ...newReminder }];
    setReminders(updatedReminders);
    localStorage.setItem("reminders", JSON.stringify(updatedReminders));
  };

  const removeReminder = (id) => {
    const updatedReminders = reminders.filter((r) => r.id !== id);
    setReminders(updatedReminders);
    localStorage.setItem("reminders", JSON.stringify(updatedReminders));
  };

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
        <header className="header-title-fast-notes">
          <h4 className="title-fast-notes">Bloco de Notas Curtas:</h4>
        </header>
        <article className="area-fast-notes">
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

        <div className="area-cards-activity">
          {reminders.map((reminder) => (
            <div key={reminder.id} className="card-activity">
              <h3 className="title-reminder">{reminder.title}</h3>
              <p className="text-reminder">{reminder.reminderText}</p>
              <span className="radio-mark">
                Prioridade: {reminder.priority}
              </span>
              <button
                className="btn-remove"
                onClick={() => removeReminder(reminder.id)}
                aria-label="Remover Lembrete"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))}
        </div>

        <div className="area-btn-add-activity">
          <button className="btn-activity" onClick={openModal}>
            +
          </button>
        </div>
      </section>

      <WindowNote
        isOpen={isModalOpen}
        onClose={closeModal}
        addReminder={addReminder}
      />

      <section className="container-03">
        <div>
          <Time />
          <Calender />
        </div>
      </section>

      <section className="container-04">
        <Calculator />
      </section>

      <section className="container-05">
        <div className="img-container-05">
          <img src={Design01} alt="" id="design-01" />
        </div>
        <div className="text-cotainer-05">
          <p>
            Pegue um café e aproveite! Nossa comunidade está sempre pensando em
            melhorias para você!
          </p>
        </div>
      </section>

      <section className="container-06">
        <div></div>
      </section>
    </main>
  );
}
