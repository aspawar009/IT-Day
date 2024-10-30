// Create and display the 9x9 grid
const boardElement = document.getElementById("sudoku-board");
const board = Array.from({ length: 9 }, () => Array(9).fill(0));

function createBoard() {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const cell = document.createElement("input");
      cell.type = "text";
      cell.maxLength = "1";
      cell.classList.add("cell");
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.oninput = (e) => handleInput(e, row, col);
      boardElement.appendChild(cell);
    }
  }
}

function handleInput(e, row, col) {
  const value = parseInt(e.target.value);
  if (value >= 1 && value <= 9) {
    board[row][col] = value;
  } else {
    board[row][col] = 0;
    e.target.value = ""; // Clear invalid input
  }
}

function isSafe(row, col, num) {
  // Check row and column
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num || board[x][col] === num) return false;
  }
  // Check 3x3 subgrid
  const startRow = row - (row % 3);
  const startCol = col - (col % 3);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i + startRow][j + startCol] === num) return false;
    }
  }
  return true;
}

function solve() {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) { // Empty cell
        for (let num = 1; num <= 9; num++) {
          if (isSafe(row, col, num)) {
            board[row][col] = num;
            if (solve()) return true; // Recursively solve for the next cell
            board[row][col] = 0; // Undo and try the next number
          }
        }
        return false; // Trigger backtracking
      }
    }
  }
  return true; // Solution found
}

function solveSudoku() {
  if (solve()) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        document.querySelector(`[data-row='${row}'][data-col='${col}']`).value = board[row][col];
      }
    }
    alert("Sudoku Solved!");
  } else {
    alert("No solution exists.");
  }
}

function clearBoard() {
  board.forEach(row => row.fill(0));
  document.querySelectorAll(".cell").forEach(cell => (cell.value = ""));
}

createBoard();
