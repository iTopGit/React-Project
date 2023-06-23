import { useState, useEffect } from 'react'

import { buildBoard, nextBoard } from '../business/Board'

// provides a way to manage the game board state in a React component.
// It updates the board based on changes in the player's actions and provides the current board state for rendering the game.

export const useBoard = ({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared,
}) => {
    const [board, setBoard] = useState(buildBoard({ rows, columns }))

    useEffect(() => {
        setBoard((previousBoard) =>
            nextBoard({
                board: previousBoard,
                player,
                resetPlayer,
                addLinesCleared,
            }),
        )
    }, [player, resetPlayer, addLinesCleared])

    return [board]
}
