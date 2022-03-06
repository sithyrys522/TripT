// Global variables
let gameOver = false;
let activePlayer = 'X';

statusBar = document.getElementById('status');
const boardCells = [
  document.getElementById('zeroCell'),
  document.getElementById('oneCell'),
  document.getElementById('twoCell'),
  document.getElementById('threeCell'),
  document.getElementById('fourCell'),
  document.getElementById('fiveCell'),
  document.getElementById('sixCell'),
  document.getElementById('sevenCell'),
  document.getElementById('eightCell')
]

const winArr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// Game Logic Section
function checkWin() {
  let winner = false;
  winArr.forEach(arr => {
    let pos1 = arr[0];
    let pos2 = arr[1];
    let pos3 = arr[2];
    if (boardCells[pos1].innerHTML == boardCells[pos2].innerHTML && boardCells[pos2].innerHTML == boardCells[pos3].innerHTML) {
      if (boardCells[pos1].innerHTML != '') {
        winner = true;
      }
    }
  })
  return winner;
}

document.querySelectorAll('.cell').forEach(cell => {
  cell.addEventListener('click', e => {
    if (cell.innerHTML != 'X' && cell.innerHTML != 'O') {
      activePlayer == 'X' ? cell.innerHTML = 'X' : cell.innerHTML = 'O';

    gameOver = checkWin();
    if (gameOver) {
      statusBar.innerHTML = activePlayer + ' player wins!';
    } else {
        activePlayer == 'X' ? activePlayer = 'O' : activePlayer = 'X';
        if (activePlayer == 'X') {
          statusBar.innerHTML = 'Current player is: X';
        } else {
          statusBar.innerHTML = 'Current player is: O';
        }
      }
    }
  })
});

/* TODO WISHLIST TODO
 * Add AI
 * Keep score record
 * Multiplayer online
 *
 * TOOLING IMPROVEMENT
 *
 * Typescript
 * Testing
*/

// Board Clear Section
function reset() {
  document.querySelectorAll('.cell').forEach(cell => {
    cell.innerHTML = '';
  })
  activePlayer = 'X';
  statusBar.innerHTML = 'Current player is: X';
}

document.querySelector('.resetButton').addEventListener('click', reset)
