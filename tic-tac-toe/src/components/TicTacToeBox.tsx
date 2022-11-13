import React from "react";
import "./TicTacToeBox.css";

type props = {
  coord: [number, number];
  symbol: "x" | "o" | "";
  onClick: () => void;
};

export default function TicTacToeBox({ coord, symbol = "", onClick }: props) {
  let style: React.CSSProperties = {};

  if (coord[0] === 0) {
    style.borderTop = "none";
  }
  if (coord[0] === 2) {
    style.borderBottom = "none";
  }

  if (coord[1] === 0) {
    style.borderLeft = "none";
  }
  if (coord[1] === 2) {
    style.borderRight = "none";
  }

  return (
    <div style={style} className="TicTacToeBox" onClick={onClick}>
      {symbol}
    </div>
  );
}
