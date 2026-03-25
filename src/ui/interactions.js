import { knightTravails } from "../knight";
let mode = "start";
let start = null;
let end = null;
let phoenix = null;

export function setupControls(container) {
  const toggleWrapper = document.createElement("label");
  toggleWrapper.classList.add("switch");
  toggleWrapper.classList.add("toggle-container");

  const input = document.createElement("input");
  input.type = "checkbox";

  const slider = document.createElement("span");
  slider.classList.add("slider");

  const modeLabel = document.createElement("div");
  modeLabel.classList.add("mode-label");

  const startLabel = document.createElement("span");
  startLabel.textContent = "START";
  startLabel.classList.add("active");

  const endLabel = document.createElement("span");
  endLabel.textContent = "END";

  modeLabel.appendChild(startLabel);
  modeLabel.appendChild(endLabel);

  container.appendChild(modeLabel);

  toggleWrapper.appendChild(input);
  toggleWrapper.appendChild(slider);

  container.appendChild(toggleWrapper);

  const findBtn = document.createElement("button");
  findBtn.textContent = "Find Path";
  findBtn.classList.add("phoenix-btn");

  const message = document.createElement("p");
  message.id = "message";
  container.appendChild(message);

  container.appendChild(findBtn);

  input.addEventListener("change", () => {
    mode = input.checked ? "end" : "start";

    if (mode === "start") {
      startLabel.classList.add("active");
      endLabel.classList.remove("active");
    } else {
      endLabel.classList.add("active");
      startLabel.classList.remove("active");
    }
  });

  findBtn.addEventListener("click", () => {
    if (!start || !end) {
      message.textContent = "Select start and end first!";
      setTimeout(() => {
        message.textContent = "";
      }, 2000);
      return;
    }

    const path = knightTravails(start, end);
    animatePath(path);
  });

  return { findBtn };
}

export function setupBoardClicks(boardEl) {
  boardEl.addEventListener("click", (e) => {
    if (!e.target.matches("button")) return;

    if (mode === "start") {
      document
        .querySelectorAll(".start")
        .forEach((el) => el.classList.remove("start"));
    } else {
      document
        .querySelectorAll(".end")
        .forEach((el) => el.classList.remove("end"));
    }

    const row = Number(e.target.dataset.row);
    const col = Number(e.target.dataset.col);

    if (mode === "start") {
      start = [row, col];
      e.target.classList.add("start");

      const board = document.getElementById("board");

      // create once
      if (!phoenix) {
        phoenix = document.createElement("img");
        phoenix.src = require("../assets/phoenix.png");
        phoenix.classList.add("phoenix");
        board.appendChild(phoenix);
      }

      const squareSize = board.offsetWidth / 8;

      const x = col * squareSize;
      const y = row * squareSize;

      phoenix.style.transform = `translate(${x + squareSize * 0.1}px, ${y + squareSize * 0.1}px)`;
      phoenix.style.width = `${squareSize * 0.8}px`;
    } else {
      end = [row, col];
      e.target.classList.add("end");
    }
  });
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function animatePath(path) {
  const board = document.getElementById("board");
  const boardRect = board.getBoundingClientRect();

  const squareSize = boardRect.width / 8;

  for (const [row, col] of path) {
    const x = col * squareSize;
    const y = row * squareSize;

    phoenix.style.transform = `translate(${x + squareSize * 0.1}px, ${y + squareSize * 0.1}px)`;

    await delay(300);
  }
}
