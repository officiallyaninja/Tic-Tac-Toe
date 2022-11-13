import React, { useEffect } from "react";
import "./App.css";
import TicTacToeGrid from "./components/TicTacToeGrid";

export default function App() {
  useEffect(() => {
    document.title = "My First React Project";
  }, []);

  return (
    <div className="App">
      <div className="TicTacToeContainer">
        <TicTacToeGrid />
      </div>
    </div>
  );
}
