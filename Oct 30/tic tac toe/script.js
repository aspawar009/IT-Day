let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const statusDisplay = document.getElementById("status");

function makeMove(index) {
  if (board[index] === "" && isGameActive) {
    board[index] = currentPlayer;
    document.querySelector(`[data-index='${index}']`).innerText = currentPlayer;
    checkResult();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    if (isGameActive) {
      statusDisplay.innerText = `Player ${currentPlayer}'s turn`;
    }
  }
}

function checkResult() {
  let roundWon = false;
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    statusDisplay.innerText = `Player ${currentPlayer} wins!`;
    isGameActive = false;
  } else if (!board.includes("")) {
    statusDisplay.innerText = "It's a draw!";
    isGameActive = false;
  }
}

function restartGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  isGameActive = true;
  statusDisplay.innerText = `Player ${currentPlayer}'s turn`;
  document.querySelectorAll(".cell").forEach(cell => (cell.innerText = ""));
}
