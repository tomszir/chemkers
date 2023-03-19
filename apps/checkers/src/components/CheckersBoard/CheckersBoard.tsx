import { useEffect, useMemo, useState } from 'preact/hooks';
import {
  Board,
  CheckersAi,
  Color,
  Move,
  MoveGenerator,
  Piece,
} from 'wasm-checkers';
import style from './CheckersBoard.module.scss';

import CheckersBoardSquare from '../CheckersBoardSquare';
import { wasmCheckersWorker } from '../../web-workers';
import { CheckersGameSettings } from '../../types';
import { useBoard, useBoardDispatch } from '../../context';
import * as boardActions from '../../context/board-context/board-context-actions';

export interface CheckersGameEndInfo {
  tie: boolean;
  winner: Color;
  totalMoves: number;
}

export interface CheckersBoardProps {
  onGameEnd: (gameEndInfo: CheckersGameEndInfo) => void;
}

function CheckersBoard({ onGameEnd }: CheckersBoardProps) {
  const {
    board,
    playerMoves,
    gameStarted,
    moveHistory,
    currentEvaluation,
    currentTurn,
    currentColorToMove,
    gameSettings,
  } = useBoard();
  const boardDispatch = useBoardDispatch();

  const [boardPieces, setBoardPieces] = useState<Piece[]>([]);
  const [selectedMoves, setSelectedMoves] = useState<Move[]>([]);
  const [selectedPieceIndex, setSelectedPieceIndex] = useState<number>(-1);
  const [highlightedSquares, setHighlightedSquares] = useState<number[]>([]);

  useEffect(() => {
    boardDispatch(boardActions.initBoardAction());
    setBoardPieces(getBoardPieces());
  }, []);

  useEffect(() => {
    if (!gameStarted) {
      return;
    }

    if (currentColorToMove == gameSettings.opponentColor) {
      makeOpponentMove();
      return;
    }

    boardDispatch(boardActions.updatePlayerMoves());
  }, [gameStarted, currentColorToMove]);

  useEffect(() => {
    setBoardPieces(getBoardPieces());
  }, [gameSettings.playerColor, moveHistory]);

  useEffect(() => {
    setSelectedMoves(
      playerMoves.filter((move) => move.start_square === selectedPieceIndex)
    );
  }, [playerMoves, selectedPieceIndex]);

  const getBoardPieces = () => {
    const pieces = Array.from(board.get_pieces());

    if (gameSettings.playerColor === Color.White) {
      return pieces.reverse();
    }

    return pieces;
  };

  const makePlayerMove = (move: Move) => {
    setSelectedMoves([]);
    boardDispatch(boardActions.makeMove(move));
    boardDispatch(boardActions.updatePlayerMoves());
    boardDispatch(boardActions.advanceTurn());
  };

  const makeOpponentMove = async () => {
    const moves: Move[] = [];

    setSelectedPieceIndex(-1);

    while (true) {
      const previousMove = moves.at(-1);
      const previousMoveJson = previousMove ? previousMove.to_json() : null;
      const moveJson = await wasmCheckersWorker.getBestMove(
        board.to_json(),
        gameSettings.opponentColor,
        previousMoveJson,
        gameSettings
      );

      if (!moveJson) {
        return;
      }

      const move = Move.from_json(moveJson);
      const forcedMoves = move.get_forced_moves_js();

      moves.push(move);

      if (forcedMoves.length == 0) {
        break;
      }
    }

    await Promise.all(
      moves.map((move, index) => {
        return new Promise<void>((resolve) =>
          setTimeout(() => {
            boardDispatch(boardActions.makeMove(move));
            resolve();
          }, 400 * (index + 1))
        );
      })
    );

    updateHighlightedSquared(moves);
    boardDispatch(boardActions.advanceTurn());
  };

  const updateHighlightedSquared = (moves: Move[]) => {
    const highlighted: number[] = [];

    moves.forEach((move) => {
      highlighted.push(move.start_square);
      highlighted.push(move.end_square);
    });

    setHighlightedSquares(highlighted);
  };

  const handleSelect = (index: number) => {
    setSelectedPieceIndex(index);
  };

  const handleClearSelect = () => {
    setSelectedMoves([]);
    setSelectedPieceIndex(-1);
  };

  const mappedSquares = boardPieces.map((piece, pieceIndex) => {
    const squareIndex =
      gameSettings.playerColor === Color.White ? 63 - pieceIndex : pieceIndex;

    return (
      <>
        <CheckersBoardSquare
          key={squareIndex}
          piece={piece}
          index={squareIndex}
          selectedMoves={selectedMoves}
          highlighted={highlightedSquares.includes(squareIndex)}
          selected={selectedPieceIndex === squareIndex}
          onMove={makePlayerMove}
          onSelect={handleSelect}
          onClearSelect={handleClearSelect}
        />
      </>
    );
  });

  return <div className={style.board}>{mappedSquares}</div>;
}

export default CheckersBoard;
