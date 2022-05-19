import React from 'react';
import '../styles/ChessBoard.css';

const ChessBoard = () => {
  const col = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const board = [];

  for (let j = col.length - 1; j >= 0; j--) {
    for (let i = 0; i < rows.length; i++) {
      board.push(
        <div className='square'>
          [{rows[i]}{col[j]}]
        </div>
      )
    }
  }
  return (
    <>
      <div className='board'>
        {console.log('Board:', board)}
        {board}
      </div>
    </>
  )
};

export default ChessBoard;