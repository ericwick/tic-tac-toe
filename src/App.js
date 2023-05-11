import Cell from "./components/cell";
import { useState } from "react";

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);

  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell key={index} id={index} cell={cell} />
        ))}
      </div>
      <p></p>
    </div>
  );
};

export default App;
