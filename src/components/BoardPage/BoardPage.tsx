import "./styles.css";
import Game from "./Game";
import { useGameOver } from "./hooks/useGameOver";
import Tetris from "./Tetris";
import Menu from "./Menu";
import { useEffect, useState } from "react";

export default function App() {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();
  const [startGame, setStartGame] = useState(true);

  const start = () => {
    resetGameOver();
    setStartGame(true);
  };

  const endGame = () => {
    setStartGame(false);
    setGameOver(true);
  };

  return (
    <div className="App">
      {startGame ? (
        <Tetris rows={20} columns={10} setGameOver={endGame} />
      ) : (
        <Menu onClick={start} />
      )}
    </div>
  );
}