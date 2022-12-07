let board = ['', '', '', '', '', '', '', '', '']
const symbols = ["o", "x"]

let computerPlayer = false
let theEnd = false
let playerTime = 0

const winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

let gameOver = false



function handleMove(position) {

    if (gameOver) {
        return;
    }

    if (board[position] == "") {

        board[position] = symbols[playerTime]

        gameOver = isWin()
       
    }

    

    return gameOver
}

function isWin() {

    for (let index = 0; index < winStates.length; index++) {
        let sequencia = winStates[index]

        let p1 = sequencia[0]
        let p2 = sequencia[1]
        let p3 = sequencia[2]

        if (board[p1] == board[p2] && 
            board[p1] == board[p3] && 
            board[p1] != "") {
                return true
        }
    }
}