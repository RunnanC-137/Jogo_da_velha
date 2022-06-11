const jogador = document.querySelector(".jogador")
const butao = document.querySelector(".button")
const stage = document.querySelector(".stage")

window.onload = function() {

    for (let square = 0; square < 9; square++) {
        let newSquare = document.createElement("div")
        newSquare.id = square
        newSquare.classList.add("square")
        stage.appendChild(newSquare)
    }

    const squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.addEventListener("click", handleClick)
    })

}

function handleClick(element) {

    let square = element.target;
    let position = square.id

    if(handleMove(position)) {
        setTimeout(() => {
            playerTime == 0 ? jogador.innerHTML = "Player ⭕ venceu" : jogador.innerHTML = "Player ❌ venceu"
            butao.classList.add("butao","recomecar")
            butao.addEventListener("click", () => location.reload())
        }, 10)
        
    }
    
    upDateSquare(`${position}`)
}

function upDateSquare(position) {
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class="${symbol}"></div>`
    
}

function whoPlayer() {

    playerTime == 0 ? playerTime = 1  : playerTime = 0
    playerTime == 0 ? jogador.innerHTML = "Player &#x2B55" : jogador.innerHTML = "Player &#x274C" 
}