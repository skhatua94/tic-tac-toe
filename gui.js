import { Game, GAMESTATE_TIE, GAMESTATE_WIN, TURN_X } from "./logic.js";

window.onload = function () {
  createNewGame();
  setupResetGame();
};

function setupResetGame() {
  const resetBtn = document.getElementById("reset");
  resetBtn.onclick = () => {
    const table = document.getElementById("ticTacToe");
    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }
    createNewGame();
  };
}

function createNewGame() {
  let game = new Game();
  const table = document.getElementById("ticTacToe");

  for (let row = 0; row < game.board.cells.length; row++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    for (let column = 0; column < 3; column++) {
      let td = document.createElement("td");
      let cellText = document.createTextNode(game.board.cells[row][column]);
      td.appendChild(cellText);
      tr.appendChild(td);
      td.onclick = (mouseEvent) => {
        game.selectCell(row, column);
        td.textContent = game.board.cells[row][column];
        game.updateGameState();
        setTimeout(() => {
          alertGameState(game);
        }, 100);
      };
    }
  }
}

function alertGameState(game) {
  const modal = document.getElementById("gameStateModal");
  const modalText = document.getElementById("gameStateText");

  const closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  if (game.gameState == GAMESTATE_WIN) {
    if (game.turn == TURN_X) {
      modalText.textContent = "Player O has won!";
    } else {
      modalText.textContent = "Player X has won!";
    }
    modal.style.display = "block";
  }
  if (game.gameState == GAMESTATE_TIE) {
    modal.style.display = "block";
    modalText.textContent = "Tie!";
  }
}
