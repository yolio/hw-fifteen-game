import { getXY, shuffleState } from './state';
import render from './rendering';
import './styles.css';


const fifteen = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, null],
];

function moveTile(gameState, xyOfEmptyCell, nextY, nextX) {
  gameState[xyOfEmptyCell.y][xyOfEmptyCell.x] = gameState[nextY][nextX];
  gameState[nextY][nextX] = null;

  if (render(gameState) && (gameState.every((inner, y) => (inner.every((el, x) => el === fifteen[y][x]))))) {
    alert('You won!');
    startGame();
  }
  // render(gameState);
}

function startGame() {
  const gameState = shuffleState(fifteen);
  render(gameState);

  document.addEventListener('keydown', (e) => {
    const xyOfEmptyCell = getXY(gameState);

    if (e.keyCode === 38) {
      // up arrow
      if (xyOfEmptyCell.y === 3) return;

      const nextY = xyOfEmptyCell.y + 1;
      const nextX = xyOfEmptyCell.x;
      moveTile(gameState, xyOfEmptyCell, nextY, nextX);
    } else if (e.keyCode === 40) {
      // down arrow
      if (xyOfEmptyCell.y === 0) return;

      const nextY = xyOfEmptyCell.y - 1;
      const nextX = xyOfEmptyCell.x;
      moveTile(gameState, xyOfEmptyCell, nextY, nextX);
    } else if (e.keyCode === 37) {
      // left arrow
      if (xyOfEmptyCell.x === 3) return;

      const nextY = xyOfEmptyCell.y;
      const nextX = xyOfEmptyCell.x + 1;
      moveTile(gameState, xyOfEmptyCell, nextY, nextX);
    } else if (e.keyCode === 39) {
      // right arrow
      if (xyOfEmptyCell.x === 0) return;

      const nextY = xyOfEmptyCell.y;
      const nextX = xyOfEmptyCell.x - 1;
      moveTile(gameState, xyOfEmptyCell, nextY, nextX);
    }
  });
}


startGame();
