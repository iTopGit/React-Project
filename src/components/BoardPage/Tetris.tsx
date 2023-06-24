import Board from './Board'
import GameController from './GameController'
import GameStats from './GameStats'
import Previews from './Previews'

import { useBoard } from './hooks/useBoard'
import { useGameStats } from './hooks/useGameStats'
import { usePlayer } from './hooks/usePlayer'

const Tetris = ({ rows, columns, setGameOver, sendPoints }) => {
  const [gameStats, addLinesCleared] = useGameStats();
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [board, setBoard] = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared,
  });

  const endGame = () => {
    setGameOver(true);
    sendPoints(gameStats.points);
  };

  return (
    <div className="Tetris">
      <Board board={board} />
      <GameStats gameStats={gameStats} />
      <Previews tetrominoes={player.tetrominoes} />
      <GameController
        board={board}
        gameStats={gameStats}
        player={player}
        setGameOver={endGame}
        setPlayer={setPlayer}
      />
    </div>
  );
};

export default Tetris;
