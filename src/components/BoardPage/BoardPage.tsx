import "./styles.css";
import { useGameOver } from "./hooks/useGameOver";
import Tetris from "./Tetris";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGameStats } from'./hooks/useGameStats'

export default function App() {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();
  const [startGame, setStartGame] = useState(true);
  const location = useLocation();
  const name = location.state?.name;
  
  console.log(name)

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