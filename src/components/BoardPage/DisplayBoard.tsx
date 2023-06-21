import React from 'react';
import { Typography } from '@mui/material';
import './DisplayBoard.css';

function DisplayBoard(props) {
  const { board } = props;

  if (!Array.isArray(board)) {
    return <div>Error: Invalid board data</div>;
  }

  return ();
}

export default DisplayBoard;

    // <div className="BoardContainer">
    //   <Typography variant="h5">TeTris</Typography>
    //   <div className="board">
    //     {board.map((row, rowIndex) => (
    //       <div key={rowIndex} className="row">
    //         {row.map((cell, colIndex) => (
    //           <div key={colIndex} className="cell">
    //             {cell}
    //           </div>
    //         ))}
    //       </div>
    //     ))}
    //   </div>
    // </div>