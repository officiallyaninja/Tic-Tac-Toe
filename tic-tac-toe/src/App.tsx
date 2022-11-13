import React from "react";
import "./App.css";
import TicTacToeGrid from "./components/TicTacToeGrid";

export default function App() {
  return (
    <div className="App">
      <div className="TicTacToeContainer">
        <TicTacToeGrid />
      </div>
    </div>
  );
}
