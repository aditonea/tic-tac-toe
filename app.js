const state = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]
let currentPlayer = "X";
let movesLeft = 8;

const table = document.querySelector("tbody")
const reset = document.getElementById("reset")
const endDisplay = document.querySelector(".end-game")
const displayWinner = document.querySelector(".result")
const playAgainButton = document.querySelector(".play-again")
const splashScreen = document.querySelector(".splash-screen")
const startGame = document.getElementById("start")
const currentPlayerDisplay = document.getElementById("currentPlayer")

startGame.addEventListener("click", playGame)

playAgainButton.addEventListener("click", playAgain)


function playAgain() {
    currentPlayer = "X";
    endDisplay.classList.add("display")
    resetState()
    playGame()
}

function playGame() {
    splashScreen.classList.add("display")
    table.addEventListener("click", (e) => {
        const row = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode)
        const ceil = Array.from(e.target.parentNode.children).indexOf(e.target)
        e.target.innerText = currentPlayer
        e.target.classList.add("taken")
        state[row][ceil] = currentPlayer
        if (currentPlayer == "X") {
            currentPlayer = "O"
        } else {
            currentPlayer = "X"
        }
        currentPlayerDisplay.innerText = currentPlayer
        checkColumns()
        checkRows()
        checkDiagonal()
        if (movesLeft = 0) {
            endDisplay.classList.remove("display")
            displayWinner.innerText = "It`s a tie"
        }
        movesLeft--
    })
}

// playGame()

reset.addEventListener("click", resetState)

function checkColumns() {
    const columnArray = []
    for (let row = 0; row < 3; row++) {
        const column = []
        for (let col = 0; col < 3; col++) {
            column.push(state[col][row])
        }
        if (column.includes("X") || column.includes("O")) {
            const result = column.every(val => val == column[0])
            if (result) {
                endDisplay.classList.remove("display")
                displayWinner.innerText = `Player ${column[0]} wins`
            }
        }
    }
}

function checkRows() {
    for (let row = 0; row < 3; row++) {
        if (state[row].includes("X") || state[row].includes("O")) {
            const result = state[row].every(val => val == state[row][0])
            if (result) {
                endDisplay.classList.remove("display")
                displayWinner.innerText = `Player ${state[row][0]} wins`
            }
        }
    }
}

function checkDiagonal() {
    if (
        (state[0].includes("X") || state[0].includes("O")) &&
        (state[1].includes("X") || state[1].includes("O"))
    ) {
        if (
            (state[0][0] == state[1][1] && state[0][0] == state[2][2]) ||
            (state[0][2] == state[1][1] && state[0][2] == state[2][0])
        ) {
            endDisplay.classList.remove("display")
            displayWinner.innerText = `Player ${state[1][1]}  wins`
        }
    }

}


function resetState() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            state[col][row] = "";
            table.querySelectorAll("td").forEach((td) => {
                td.innerText = ""
                td.classList.remove("taken")
            })
        }
    }
}






// const buttonElList = [
//     [
//         document.querySelector('.row-0 .col-0'),
//         document.querySelector('.row-0 .col-1'),
//         document.querySelector('.row-0 .col-2')
//     ],
//     [
//         document.querySelector('.row-1 .col-0'),
//         document.querySelector('.row-1 .col-1'),
//         document.querySelector('.row-1 .col-2')
//     ],
//     [
//         document.querySelector('.row-2 .col-0'),
//         document.querySelector('.row-2 .col-1'),
//         document.querySelector('.row-2 .col-2')
//     ],
// ]

// const resetEl = document.getElementById('reset')
// resetEl.addEventListener('click', function () {
//     for (let row = 0; row < 3; row++) {
//         for (let col = 0; col < 3; col++) {
//             state[col][row] = "";
//             buttonElList[col][row].innerText = ""
//         }
//     }
// })

// function onButtonClick(col, row) {
//     // do the magic
// }


// function initGame() {
//     for (let row = 0; row < 3; row++) {
//         for (let col = 0; col < 3; col++) {
//             buttonElList[col][row].addEventListener('click', () => onButtonClick(col, row))
//         }
//     }
// }

// initGame();