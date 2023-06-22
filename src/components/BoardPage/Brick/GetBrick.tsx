function GetBrick(brick: string) {

    if (brick === 'I') {
        return {
            brick,
            position: [
                [1, 4],
                [1, 5],
                [1, 6],
                [1, 7],
            ],
        }
    } else if (brick === 'J') {
        return {
            brick,
            position: [
                [0, 4],
                [1, 4],
                [1, 5],
                [1, 6],
            ],
        }
    } else if (brick === 'L') {
        return {
            brick,
            position: [
                [0, 6],
                [1, 4],
                [1, 5],
                [1, 6],
            ],
        }
    } else if (brick === 'O') {
        return {
            brick,
            position: [
                [0, 5],
                [0, 6],
                [1, 5],
                [1, 6],
            ],
        }
    } else if (brick === 'S') {
        return {
            brick,
            position: [
                [0, 5],
                [0, 6],
                [1, 4],
                [1, 5],
            ],
        }
    } else if (brick === 'T') {
        return {
            brick,
            position: [
                [0, 5],
                [1, 4],
                [1, 5],
                [1, 6],
            ],
        }
    } else if (brick === 'Z') {
        return {
            brick,
            position: [
                [0, 4],
                [0, 5],
                [1, 5],
                [1, 6],
            ],
        }
    } else {
        brick = 'I'
        return {
            brick,
            position: [
                [1, 4],
                [1, 5],
                [1, 6],
                [1, 7],
            ],
        }
    }
}

export default GetBrick

// const brick_O = {
//     name : 'O',
//     numberData: 123,
//   };
