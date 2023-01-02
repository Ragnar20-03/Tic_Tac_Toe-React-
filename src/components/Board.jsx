import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Square from "./Square"; 



const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext,setIsXNext] = useState(false);

const winner=calculateWinner(board);
console.log(winner);

const message= winner ? `winner is ${winner}`: `Next Player is ${isXNext ? 'X' : '0' }`;


  const handleSquareClick = (position) => {
   

    if(board[position ] ||winner){
      return;
    }

    
    setBoard((prev) => {
      return  prev.map((square, pos) => {
        if (pos===position) {
          return  isXNext ? 'X' : '0';          
        }
        return square;
      })
    })


    setIsXNext(prev=> !prev);

  };

  const renderSquare = (position) => {
     return <Square
      value={board[position]}
      onClick={() => {
        handleSquareClick(position);
      }}
    />;
  };

  return (
    <div className="board">
      <div className="app">{message} </div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="app"><br></br><br></br>-Roshan Patil </div>
    </div>
  );
};

export default Board;
