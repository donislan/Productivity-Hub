import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../css/calender-module.css";

const API_KEY = "6r5wh5OAjVVI4VL84vxxMlrelZbObtLp";
const COUNTRY = "BR";

export default function Calender() {
  const [feriados, setFeriados] = useState([]);
  const [dataAtual, setDataAtual] = useState(new Date());

  useEffect(() => {
    fetch(
      `https://calendarific.com/api/v2/holidays?&api_key=${API_KEY}&country=${COUNTRY}&year=${dataAtual.getFullYear()}`
    )
      .then((response) => response.json())
      .then((data) => setFeriados(data.response.holidays))
      .catch((error) => console.error("Erro ao buscar feriados:", error));
  }, [dataAtual]);

  const marcarFeriados = (date) => {
    const dataStr = date.toISOString().split("T")[0];
    return feriados.some((feriado) => feriado.date.iso === dataStr);
  };

  return (
    <div className="calender">
      <Calendar
        value={dataAtual}
        onChange={setDataAtual}
        tileClassName={({ date }) => (marcarFeriados(date) ? "highlight" : "")}
      />
    </div>
  );
}
