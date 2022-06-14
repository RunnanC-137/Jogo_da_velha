const jogador = document.querySelector(".jogador")
const butao = document.querySelector(".butao")
const stage = document.querySelector(".stage")


window.onload = function() {

    for (let square = 0; square < 9; square++) {
        let newSquare = document.createElement("div")
        newSquare.id = square
        newSquare.classList.add("square")
        stage.appendChild(newSquare)
    }

    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.addEventListener("click", handleClick)
    })

}

function handleClick(element) {

    
    let square = element.target;
    let length = square.children.length
    console.log(length)
    if (length < 1) {
        
        let position = square.id
    
        if(handleMove(position)) {
            whoWin(100)
            butao.style.display = "flex"
        } 
        upDateSquare(`${position}`)
        whoPlayer()
    }
}

function upDateSquare(position) {
    let square = document.getElementById(position.toString())
    let symbol = document.createElement("div")
    symbol.classList.add(`${board[position]}`)
    square.appendChild(symbol)
}

function whoPlayer() {

    playerTime == 0 ? playerTime = 1  : playerTime = 0
    playerTime == 0 ? jogador.innerHTML = "Player &#x2B55" : jogador.innerHTML = "Player &#x274C" 
}

function whoWin(time) {

    let squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.removeEventListener("click", handleClick)
    })
    setTimeout(() => {
        playerTime == 0 ? jogador.innerHTML = "Payer ❌ venceu" : jogador.innerHTML = "Player ⭕ venceu"

    }, time)
}

function whichGame() {
    
}