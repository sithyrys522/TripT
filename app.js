let gameOver = false;
let activePlayer = 'X';

statusBar = document.getElementById('status');
// Game Logic Section
document.querySelectorAll('.cell').forEach(cell => {
  cell.addEventListener('click', e => {
    if (cell.innerHTML != 'X' && cell.innerHTML != 'O') {
      activePlayer == 'X' ? cell.innerHTML = 'X' : cell.innerHTML = 'O';

    // TODO: Check for win
    
    // TODO: Change turn and update status board
      activePlayer == 'X' ? activePlayer = 'O' : activePlayer = 'X';
      if (activePlayer == 'X') {
        statusBar.innerHTML = 'Current player is: X';
      } else {
        statusBar.innerHTML = 'Current player is: O';
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
