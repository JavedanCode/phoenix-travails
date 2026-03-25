let container;

export function getContainer(el) {
  container = el;
}

export default function renderBoard() {
  const boardContainer = document.createElement("div");
  boardContainer.id = "board";

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement("button");
      square.classList.add("square");

      if ((row + col) % 2 === 0) {
        square.classList.add("light");
      } else {
        square.classList.add("dark");
      }
      square.dataset.row = row;
      square.dataset.col = col;

      boardContainer.appendChild(square);
    }
  }

  container.appendChild(boardContainer);

  return boardContainer;
}
