import { Color, Board, MoveGenerator, CheckersAi } from 'wasm-checkers';
import { getInitialBoardState } from './board-context';
import {
  BoardContextAction,
  BoardContextActionType,
  BoardContextState,
} from './board-context-types';

export const boardContextReducer = (
  state: BoardContextState,
  action: BoardContextAction
) => {
  const { type, payload } = action;

  switch (type) {
    case BoardContextActionType.INIT_BOARD: {
      return getInitialBoardState();
    }
    case BoardContextActionType.START_GAME: {
      return { ...state, gameStarted: true };
    }
    case BoardContextActionType.UPDATE_GAME_SETTINGS: {
      const gameSettings = payload;
      const opponentColor =
        gameSettings.playerColor == Color.White ? Color.Black : Color.White;
      return { ...state, gameSettings: { ...gameSettings, opponentColor } };
    }
    case BoardContextActionType.UPDATE_PLAYER_MOVES: {
      const previousMove = state.moveHistory.reverse().find((move) => {
        return move.moved_piece.color == state.gameSettings.playerColor;
      });
      const forcedPlayerMoves = previousMove?.get_forced_moves_js() || [];

      if (forcedPlayerMoves.length > 0) {
        return { ...state, playerMoves: forcedPlayerMoves };
      }

      const playerMoves = MoveGenerator.get_valid_moves_js(
        state.board as Board,
        state.gameSettings.playerColor,
        state.gameSettings.checkersSettings
      );

      return { ...state, playerMoves };
    }
    case BoardContextActionType.MAKE_MOVE: {
      const move = payload;
      const board = state.board;

      board.handle_move(move);

      const currentEvaluation = CheckersAi.get_heuristic_value_js(
        board,
        state.gameSettings.checkersSettings
      );

      return {
        ...state,
        board,
        currentEvaluation,
        moveHistory: [...state.moveHistory, move],
      };
    }
    case BoardContextActionType.ADVANCE_TURN: {
      const lastMove = state.moveHistory.at(-1);
      const lastMoveForcedMoves = lastMove?.get_forced_moves_js() || [];

      if (lastMoveForcedMoves.length > 0) {
        return {
          ...state,
          moveHistory: [...state.moveHistory],
        };
      }

      const currentColorToMove =
        state.currentColorToMove == Color.White ? Color.Black : Color.White;
      const currentTurn = state.currentTurn + 1;

      return { ...state, currentTurn, currentColorToMove };
    }
    default: {
      throw new Error('Invalid board reducer action provided.');
    }
  }
};
