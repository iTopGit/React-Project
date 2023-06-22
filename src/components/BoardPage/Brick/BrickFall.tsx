function BrickFall(board: string[][], position: number[][]): [string[][], boolean]{
    // console.log('position.length = '+position.length)
    let moveable = true
    for (let i = 0; i < position.length; i++) {
        let rowIndex =  position[i][0]
        let columnIndex =  position[i][1]
        if (board[rowIndex][columnIndex+1] === 'BE') {
            moveable = false
            console.log('moveable = '+moveable)
            break
        }
        console.log('moveable = '+moveable)
        // console.log('row = '+rowIndex+', column = '+columnIndex)
    }
    if (moveable === true) {
        for (let i = 0; i < position.length; i++) {
            // remove old position 
            let rowIndex =  position[i][0]
            let columnIndex =  position[i][1]
            console.log('row = '+rowIndex+', column = '+columnIndex)
            if (rowIndex <= 1) {
                board[rowIndex][columnIndex] = 'SP'
                
            } else {
                board[rowIndex][columnIndex] = '0'
            }
            console.log('DELETE')
            console.log(board)
            // add new position 
            position[rowIndex][0] += 1
            board[rowIndex][columnIndex] = 'BRICK'
            console.log('ADD')
            console.log(board)
            console.log('END')
        }
    }


    return [board, moveable]
}

export default BrickFall