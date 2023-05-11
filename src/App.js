import Cell from "./components/cell";
import { useState, useEffect } from "react";

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState(null);

  const message = "It is now " + go + "'s go.";

  const checkScore = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winningCombos.forEach((arr) => {
      let circleWins = arr.every((cell) => cells[cell] === "circle");

      if (circleWins) {
        setWinningMessage("Circle Wins!");
        return;
      }
    });

    winningCombos.forEach((arr) => {
      let crossWins = arr.every((cell) => cells[cell] === "cross");

      if (crossWins) {
        setWinningMessage("Cross Wins!");
        return;
      }
    });
  };

  useEffect(() => {
    checkScore();
  }, [cells]);

  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            setCells={setCells}
            go={go}
            setGo={setGo}
            cells={cells}
            winningMessage={winningMessage}
          />
        ))}
      </div>
      <p>{winningMessage || message}</p>
    </div>
  );
};

export default App;
