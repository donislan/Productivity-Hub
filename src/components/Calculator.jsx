// src/components/Calculator.jsx
import React, { useState } from "react";
import { evaluate } from "mathjs"; // Importa a função evaluate da biblioteca mathjs
import "../css/calculator-module.css";

export default function Calculator() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        // Remove espaços extras e avalia a expressão
        const cleanedDisplay = display.replace(/\s+/g, "");
        const result = evaluate(cleanedDisplay);
        setDisplay(result.toString());
      } catch (error) {
        console.error("Error evaluating expression:", error);
        setDisplay("Error");
      }
    } else if (value === "C") {
      setDisplay("");
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display-calculator">{display || "0"}</div>
      <div className="calculator-buttons">
        <button className="calculator-button" onClick={() => handleClick("1")}>
          1
        </button>
        <button className="calculator-button" onClick={() => handleClick("2")}>
          2
        </button>
        <button className="calculator-button" onClick={() => handleClick("3")}>
          3
        </button>
        <button className="calculator-button" onClick={() => handleClick("+")}>
          +
        </button>
        <button className="calculator-button" onClick={() => handleClick("4")}>
          4
        </button>
        <button className="calculator-button" onClick={() => handleClick("5")}>
          5
        </button>
        <button className="calculator-button" onClick={() => handleClick("6")}>
          6
        </button>
        <button className="calculator-button" onClick={() => handleClick("-")}>
          -
        </button>
        <button className="calculator-button" onClick={() => handleClick("7")}>
          7
        </button>
        <button className="calculator-button" onClick={() => handleClick("8")}>
          8
        </button>
        <button className="calculator-button" onClick={() => handleClick("9")}>
          9
        </button>
        <button className="calculator-button" onClick={() => handleClick("*")}>
          *
        </button>
        <button className="calculator-button" onClick={() => handleClick("C")}>
          C
        </button>
        <button className="calculator-button" onClick={() => handleClick("0")}>
          0
        </button>
        <button className="calculator-button" onClick={() => handleClick(".")}>
          .
        </button>
        <button className="calculator-button" onClick={() => handleClick("/")}>
          /
        </button>
        <button
          className="calculator-button equality"
          onClick={() => handleClick("=")}
        >
          =
        </button>
      </div>
    </div>
  );
}
