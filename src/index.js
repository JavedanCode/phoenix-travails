import "../src/styles/main.css";
import renderLayout from "./ui/layout";
import renderBoard, { getContainer } from "./ui/board";

import { setupControls, setupBoardClicks } from "./ui/interactions";

const main = renderLayout();
getContainer(main);

const board = renderBoard();

const btnContainer = document.getElementById("btn-container");
const { findBtn } = setupControls(btnContainer);

setupBoardClicks(board);
