import { useState, useEffect } from "react";
import "./game.css";

function App() {
  const [winIdx, setWinIdx] = useState(-1);
  const [won, setWon] = useState(false);

  useEffect(() => {
    setWinIdx(Math.floor(Math.random() * 9));
  }, []);

  return (
    <>
      <div className="grid">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (idx === winIdx) setWon(true);
              else alert("Try again!");
            }}
          >
            {won && idx === winIdx ? "Gift" : val}
          </button>
        ))}
      </div>
      {won && <p className="msg"> You Won!</p>}
    </>
  );
}

export default App;

