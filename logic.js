const CELLSTATE_X = "x";
const CELLSTATE_O = "o";
const CELLSTATE_EMPTY = "";

const GAMESTATE_INPROGRESS = "IN PROGRESS";
const GAMESTATE_WIN = "WIN";
const GAMESTATE_TIE = "TIE";

const TURN_X = "TURN X";
const TURN_O = "TURN O";

class Board {
  constructor() {
    this.cells = [[], [], []];

    for (let row = 0; row < 3; row++) {
      for (let column = 0; column < 3; column++) {
        this.cells[row][column] = CELLSTATE_EMPTY;
      }
    }
  }
}

class Game {
  constructor() {
    this.board = new Board();
    this.gameState = GAMESTATE_INPROGRESS;
    this.turn = TURN_X;
  }

  selectCell(row, column) {
    if (this.board.cells[row][column] != CELLSTATE_EMPTY) {
      throw new Error(
        "Cell has already been selected. Please select another one!"
      );
    }
    if ((this.turn = TURN_X)) {
      this.board.cells[row][column] = CELLSTATE_X;
      this.turn = TURN_O;
    } else {
      this.board.cells[row][column] = CELLSTATE_O;
      this.turn = TURN_X;
    }
  }

  updateGameState() {
    if (this.checkRows() || this.checkColumns() || this.checkDiagonals()) {
      this.gameState = GAMESTATE_WIN;
    } else {
      if (this.allCellsFilled()) {
        this.gameState = GAMESTATE_TIE;
      }
    }
  }

  checkRows() {
    for (let row = 0; row < 3; row++) {
      if (
        this.board.cells[row][0] == CELLSTATE_X &&
        this.board.cells[row][1] == CELLSTATE_X &&
        this.board.cells[row][2] == CELLSTATE_X
      ) {
        return true;
      }
      if (
        this.board.cells[row][0] == CELLSTATE_O &&
        this.board.cells[row][1] == CELLSTATE_O &&
        this.board.cells[row][2] == CELLSTATE_O
      ) {
        return true;
      }
    }
    return false;
  }

  checkColumns() {
    for (let column = 0; column < 3; column++) {
      if (
        this.board.cells[0][column] == CELLSTATE_X &&
        this.board.cells[1][column] == CELLSTATE_X &&
        this.board.cells[2][column] == CELLSTATE_X
      ) {
        return true;
      }
      if (
        this.board.cells[0][column] == CELLSTATE_O &&
        this.board.cells[1][column] == CELLSTATE_O &&
        this.board.cells[2][column] == CELLSTATE_O
      ) {
        return true;
      }
    }
    return false;
  }

  checkDiagonals() {
    if (
      this.board.cells[0][0] == CELLSTATE_X &&
      this.board.cells[1][1] == CELLSTATE_X &&
      this.board.cells[2][2] == CELLSTATE_X
    ) {
      return true;
    }

    if (
      this.board.cells[0][0] == CELLSTATE_O &&
      this.board.cells[1][1] == CELLSTATE_O &&
      this.board.cells[2][2] == CELLSTATE_O
    ) {
      return true;
    }

    if (
      this.board.cells[2][0] == CELLSTATE_X &&
      this.board.cells[1][1] == CELLSTATE_X &&
      this.board.cells[0][2] == CELLSTATE_X
    ) {
      return true;
    }

    if (
      this.board.cells[2][0] == CELLSTATE_O &&
      this.board.cells[1][1] == CELLSTATE_O &&
      this.board.cells[0][2] == CELLSTATE_O
    ) {
      return true;
    }

    return false;
  }

  allCellsFilled() {
    for (let row = 0; row < 3; row++) {
      for (let column = 0; column < 3; column++) {
        return !(this.board.cells[row][column] == CELLSTATE_EMPTY);
      }
    }
    return true;
  }
}

export {
  CELLSTATE_X,
  CELLSTATE_O,
  CELLSTATE_EMPTY,
  GAMESTATE_INPROGRESS,
  GAMESTATE_WIN,
  GAMESTATE_TIE,
  Board,
  TURN_X,
  TURN_O,
  Game,
};
