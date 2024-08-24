import React, { useState, useEffect } from "react";
import "../css/time-module.css";

export default function Time() {
  const [currentDay, setCurrentDay] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setCurrentDay(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  const daysOfWeek = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  const dayWeek = daysOfWeek[currentDay.getDay()];
  const hora = currentDay.toLocaleTimeString();

  return (
    <div className="container-time">
      <div className="day">{dayWeek}</div>
      <div className="hour">{hora}</div>
    </div>
  );
}
