function SpawnBrick(board: string[][], position: number[][]){
    // console.log('position.length = '+position.length)
    for (let i = 0; i < position.length; i++) {
        let rowIndex =  position[i][0]
        let columnIndex =  position[i][1]
        // console.log('row = '+rowIndex+', column = '+columnIndex)
        board[rowIndex][columnIndex] = 'BRICK'
    }
    return board
}

export default SpawnBrick