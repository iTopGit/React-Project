import './BoardContainer.css';
import { Typography } from '@mui/material';
import PlayGame from './PlayGame';

function BoardContainer ()  {

    const rows = 20;
    const columns = 10;
    const initialBoard = Array.from(Array(rows), () => new Array(columns).fill(''));
    console.log(initialBoard);

	let board = JSON.parse(JSON.stringify(initialBoard));

	PlayGame(board)

    return (
        <div className="BoardContainer">
            <Typography variant="h5">TeTris</Typography>
            <div className="board">
                {initialBoard[0].map((_, columnIndex) => (
                	<div key={columnIndex} className="row">
						{initialBoard.map((row, rowIndex) => (
							<div key={rowIndex} className="cell">
								{row[columnIndex]}
							</div>
						))}
              		</div>
            	))}
            </div>
        </div>
    );
};

export default BoardContainer;
