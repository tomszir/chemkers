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
      setSelectedMoves([]);
      setSelectedPieceIndex(-1);
      makeOpponentMove();
      return;
    }

    boardDispatch(boardActions.updatePlayerMoves());
  }, [gameStarted, currentColorToMove, moveHistory]);

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
    setSelectedPieceIndex(-1);
    boardDispatch(boardActions.makeMove(move));
    boardDispatch(boardActions.updatePlayerMoves());
    boardDispatch(boardActions.advanceTurn());
  };

  const makeOpponentMove = async () => {
    const previousMove = moveHistory.at(-1);
    const previousMoveData =
      previousMove?.moved_piece.color === gameSettings.opponentColor
        ? previousMove.to_json()
        : null;
    const startTime = Date.now();
    const bestMoveData = await wasmCheckersWorker.getBestMove(
      board.to_json(),
      gameSettings.opponentColor,
      previousMoveData,
      gameSettings
    );
    const timeTaken = Date.now() - startTime;

    if (!bestMoveData) {
      throw new Error(
        'Something went wrong with getting the best opponent move.'
      );
    }

    const bestMove = Move.from_json(bestMoveData);

    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, Math.max(0, 500 - timeTaken));
    });

    updateHighlightedSquares(bestMove);
    boardDispatch(boardActions.makeMove(bestMove));
    boardDispatch(boardActions.advanceTurn());
  };

  const updateHighlightedSquares = (move: Move) => {
    setHighlightedSquares([
      ...highlightedSquares,
      move.start_square,
      move.end_square,
    ]);
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
