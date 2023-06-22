import React, { useEffect, useState } from 'react'
import DisplayBoard from './DisplayBoard'
import InitBoard from './InitBoard'
import GetBrick from './Brick/GetBrick'
import SpawnBrick from './Brick/SpawnBrick'
import BrickFall from './Brick/BrickFall'

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

function BoardPage() {
    let board: string[][] = InitBoard()

    const brickO = true 
    let BrickArray = ['O']
    if (!brickO) {
        BrickArray = ['I', 'J', 'L', 'O', 'S', 'T', 'Z']
    }
    
    let randomBrick = Math.floor(Math.random() * BrickArray.length)

    const [gameOver, setGameOver] = useState(false)

    useEffect(() => {
        let isGameOver = false

        const handleKeyDown = (event: any) => {
            if (event.key === 'z') {
                isGameOver = true
            }
        }

        document.addEventListener('keydown', handleKeyDown)

        const startGame = async () => {
            while (!isGameOver) {
                // Spawn Brick
                let randomBrick = Math.floor(Math.random() * BrickArray.length)
                let BrickType = BrickArray[randomBrick]
                console.log('Type = ' + BrickType)
                let brick = GetBrick(BrickType)
                board = SpawnBrick(board, brick.position)
                console.log(board)
                setTimeout(() => {}, 1000);

                // Fall Brick
                console.log('Spawn')
                let fallable = true
                let i = 0
                while (fallable && i <= 10) {
                    let FallResult = BrickFall(board, brick.position)
                    console.log(brick.position)
                    board = FallResult[0]
                    console.log(board)
                    fallable = FallResult[1]
                    if (!fallable) {
                        break
                    }

                    i++
                    setTimeout(() => {}, 1000);
                }

                // update board here
                setTimeout(() => {}, 1000);
            }
        }

        startGame()

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [])
    // <DisplayBoard board={board}/>
    return null
}

export default BoardPage
