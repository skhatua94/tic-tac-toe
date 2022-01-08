import {
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
} from "../logic.js";

describe("logic tests", function () {
  it("game state should be in progress", function () {
    let g = new Game();
    expect(g.gameState).toBe(GAMESTATE_INPROGRESS);
  });
  it("the starting turn should be X", function () {
    let g = new Game();
    expect(g.turn).toBe(TURN_X);
  });
  it("the first selected cell should be marked with an x", function () {
    let g = new Game();
    g.selectCell(0, 0);
    expect(g.board.cells[0][0]).toBe(CELLSTATE_X);
  });
  it("the next turn should be O", function () {
    let g = new Game();
    g.selectCell(0, 0);
    expect(g.turn).toBe(TURN_O);
  });
  it("x should win the game when a row is complete", function () {
    let g = new Game();
    g.selectCell(0, 0);
    g.selectCell(2, 2);
    g.selectCell(0, 1);
    g.selectCell(1, 2);
    g.selectCell(0, 2);
    g.updateGameState();
    expect(g.gameState).toBe(GAMESTATE_WIN);
  });
  it("should throw an error when selecting a cell that is not empty", function () {
    let g = new Game();
    g.selectCell(0, 0);
    expect(() => g.selectCell(0, 0)).toThrowError(
      "Cell has already been selected. Please select another one!"
    );
  });
});
