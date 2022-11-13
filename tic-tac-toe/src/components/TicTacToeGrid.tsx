import React, { useState } from "react";
import "./TicTacToeGrid.css";
import TicTacToeBox from "./TicTacToeBox";

let currentSymbol: "x" | "o" = "x";
function changeSymbol() {
  switch (currentSymbol) {
    case "x":
      currentSymbol = "o";
      break;
    case "o":
      currentSymbol = "x";
      break;
  }
}

function getCurrentSymbol() {
  return currentSymbol;
}

export default function TicTacToeGrid() {
  const coords: [number, number][] = [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ];

  let [grid, setGrid] = useState<("x" | "o" | "")[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  //generates and onlcick function for the particular box
  function GenerateOnClick(coord: [number, number]) {
    return () => {
      let coordIndex = coord[0] * 3 + coord[1]; //maps coord to index of symbol in grid state

      let nextGrid = grid.map(
        (
          symbol,
          index //we replace it to x if the coord we clicked on matches grid
        ) =>
          index === coordIndex && symbol === "" ? getCurrentSymbol() : symbol //state index
      );
      if (grid[coordIndex] !== nextGrid[coordIndex]) changeSymbol();
      setGrid(nextGrid);
    };
  }

  let boxes = coords.map((coord, index) => {
    return (
      <TicTacToeBox
        coord={coord}
        symbol={grid[index]}
        onClick={GenerateOnClick(coord)}
      ></TicTacToeBox>
    );
  });

  return <div className="TicTacToeGrid">{boxes}</div>;
}
