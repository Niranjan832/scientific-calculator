import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const appendValue = (val) => {
    setInput((prev) => prev + val);
  };

  const clearDisplay = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {/* Numbers */}
        {[7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", 0, ".", "+", "C"].map(
          (item, idx) => (
            <button
              key={idx}
              className={item === "C" ? "clear" : ""}
              onClick={() =>
                item === "C" ? clearDisplay() : appendValue(item.toString())
              }
            >
              {item}
            </button>
          )
        )}

        {/* Scientific Functions */}
        <button onClick={() => appendValue("Math.sin(")}>sin</button>
        <button onClick={() => appendValue("Math.cos(")}>cos</button>
        <button onClick={() => appendValue("Math.tan(")}>tan</button>
        <button onClick={() => appendValue("Math.log(")}>log</button>

        <button onClick={() => appendValue("Math.sqrt(")}>√</button>
        <button onClick={() => appendValue("Math.pow(")}>pow</button>
        <button onClick={() => appendValue("Math.PI")}>π</button>
        <button onClick={() => appendValue("Math.E")}>e</button>

        {/* Equal */}
        <button className="equal" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
