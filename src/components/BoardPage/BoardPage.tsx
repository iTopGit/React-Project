import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../style/styles.css';
import { useGameOver } from './hooks/useGameOver';
import Tetris from './Tetris';
import Menu from './Menu';

export default function App() {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();
  const [startGame, setStartGame] = useState(true);
  const [points, setPoints] = useState(0);
  const location = useLocation();
  const name = location.state?.name;

  const start = () => {
    resetGameOver();
    setStartGame(true);
  };

  const endGame = (points) => {
    setStartGame(false);
    setGameOver(true);
    setPoints(points);
  };

  return (
    <div className="App">
      {startGame ? (
        <Tetris
          rows={20}
          columns={10}
          setGameOver={endGame}
          sendPoints={endGame}
        />
      ) : (
        <Menu onClick={start} points={points} />
      )}
    </div>
  );
}
