function InitBoard(): string[][] {
    const rows = 23
    const columns = 12
    let initialBoard: string[][] = Array.from(Array(rows), (_, rowIndex) =>
        Array.from(Array(columns), (_, colIndex) => {
            if (rowIndex === 22) {
                return 'BE' // Below Edge
            } else if (rowIndex <= 21 && colIndex === 0) {
                return 'LE' // Left Edge
            } else if (rowIndex <= 21 && colIndex === 11) {
                return 'RE' // Right Edge
            } else if (rowIndex <= 1 && colIndex > 0 && colIndex < 11) {
                return 'SP' // Spawn Point
            } else {
                return '0'
            }
        }),
    )

    return initialBoard
}

export default InitBoard

// let board = JSON.parse(JSON.stringify(initialBoard));
