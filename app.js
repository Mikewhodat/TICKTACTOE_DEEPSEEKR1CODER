// app.js
let turn = 'X';
const cells = Array.from(document.querySelectorAll('.cell'));
cells.forEach(cell => cell.addEventListener('click', handleClick));

function handleClick() {
  if (this.textContent !== '') return;
  this.textContent = turn;
  checkWin();
  turn = turn === 'X' ? 'O' : 'X';
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let combination of winningCombinations) {
    if (combination.every(index => cells[index].textContent === turn)) {
      alert(`Player ${turn} wins!!`);
      location.reload();
    }
  }
}
