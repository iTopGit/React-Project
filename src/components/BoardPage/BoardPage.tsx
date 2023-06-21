import React, { useEffect, useState } from 'react';
import DisplayBoard from './DisplayBoard';
import InitBoard from './InitBoard';
import GetBrick from './GetBrick';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function BoardPage() {
  const board = <InitBoard />;
  const BrickArray = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
  let randomBrick = Math.floor(Math.random() * BrickArray.length);

  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    let isGameOver = false;

    const handleKeyDown = (event) => {
      if (event.key === 'z') {
        isGameOver = true;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    const startGame = async () => {
      while (!isGameOver) {
        let randomBrick = Math.floor(Math.random() * BrickArray.length);
        let brickString = GetBrick(BrickArray[randomBrick]);
        console.log(brickString);
        await sleep(1000); // Sleep for 1 second (1000 milliseconds)
      }
    };

    startGame();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  // <DisplayBoard board={board}/>
  return null;
}

export default BoardPage;
