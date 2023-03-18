import { useEffect, useMemo, useState } from 'preact/hooks';
import { Board, Color, Move, MoveGenerator, Piece } from 'wasm-checkers';
import style from './CheckersBoard.module.scss';

import CheckersBoardSquare from '../CheckersBoardSquare';
import { CheckersGameSettings } from '../GameSettingsOverlay/GameSettingsOverlay';
import { wasmCheckersWorker } from '../../web-workers';

export interface CheckersGameEndInfo {
  tie: boolean;
  winner: Color;
  totalMoves: number;
}

export interface CheckersBoardProps {
  gameSettings: CheckersGameSettings;
  onGameEnd: (gameEndInfo: CheckersGameEndInfo) => void;
}

function CheckersBoard({ gameSettings, onGameEnd }: CheckersBoardProps) {
  const { playerColor, gameStarted } = gameSettings;
  const opponentColor = playerColor === Color.White ? Color.Black : Color.White;

  const board = useMemo(() => new Board(), []);
  const [scoreEvaluation, setScoreEvaluation] = useState(0);
  const [totalMoves, setTotalMoves] = useState<number>(0);
  const [moves, setMoves] = useState<Move[]>([]);
  const [boardPieces, setBoardPieces] = useState<Piece[]>([]);
  const [selectedMoves, setSelectedMoves] = useState<Move[]>([]);
  const [selectedPieceIndex, setSelectedPieceIndex] = useState<number>(-1);
  const [highlightedSquares, setHighlightedSquares] = useState<number[]>([]);

  useEffect(() => {
    resetBoard();
  }, []);

  useEffect(() => {
    if (!gameStarted) {
      resetBoard();
      return;
    }

    if (playerColor === Color.White) {
      updatePlayerMoves();
      return;
    }

    handleComputerMove();
  }, [gameSettings.gameStarted]);

  useEffect(() => {
    setBoardPieces(getBoardPieces());
  }, [gameSettings.playerColor]);

  useEffect(() => {
    setScoreEvaluation(0);
  }, [totalMoves]);

  useEffect(() => {
    setSelectedMoves(
      moves.filter((move) => move.start_square === selectedPieceIndex)
    );
  }, [moves, selectedPieceIndex]);

  const getBoardPieces = () => {
    const pieces = Array.from(board.get_pieces());

    if (playerColor === Color.White) {
      return pieces.reverse();
    }

    return pieces;
  };

  const resetBoard = () => {
    board.init_default_state();
    setBoardPieces(getBoardPieces());
  };

  const updatePlayerMoves = () => {
    setMoves(
      MoveGenerator.get_valid_moves_js(
        board,
        playerColor,
        gameSettings.checkersSettings
      )
    );
  };

  const checkAndHandleGameEnd = (): boolean => {
    if (!board.is_game_over(gameSettings.checkersSettings)) {
      return false;
    }

    const tie = scoreEvaluation === 0;
    const winner = scoreEvaluation > 0 ? Color.White : Color.Black;

    onGameEnd({ tie, winner, totalMoves });

    return true;
  };

  const handleClearSelect = () => {
    setSelectedMoves([]);
    setSelectedPieceIndex(-1);
  };

  const handleSelect = (index: number) => {
    setSelectedPieceIndex(index);
  };

  const handleComputerMove = async () => {
    const computerMoves: Move[] = [];
    const computerMoveBoardPieces: Piece[][] = [];

    setMoves([]);
    setSelectedMoves([]);

    do {
      const previousMove = computerMoves.at(-1);
      const moveJson = await wasmCheckersWorker.getBestMove(
        board.to_json(),
        opponentColor,
        previousMove ? previousMove.to_json() : null,
        gameSettings
      );

      if (!moveJson) {
        return;
      }

      const move = Move.from_json(moveJson);

      board.handle_move(move);
      computerMoves.push(move);
      computerMoveBoardPieces.push(getBoardPieces());
    } while ((computerMoves.at(-1) as Move).get_forced_moves_js().length > 0);

    // Displays and blocks the game while displaying all queued computer moves
    await Promise.all(
      computerMoveBoardPieces.map((boardPieces, index) => {
        return new Promise<void>((resolve) =>
          setTimeout(() => {
            setBoardPieces(boardPieces);
            setTotalMoves(totalMoves + 1);
            resolve();
          }, 400 * (index + 1))
        );
      })
    );

    const highlighted: number[] = [];

    computerMoves.forEach((move) => {
      highlighted.push(move.start_square);
      highlighted.push(move.end_square);
    });

    setHighlightedSquares(highlighted);

    if (checkAndHandleGameEnd()) {
      return;
    }

    updatePlayerMoves();
  };

  const handlePlayerMove = async (move: Move) => {
    board.handle_move(move);
    setBoardPieces(getBoardPieces());
    setTotalMoves(totalMoves + 1);
    setSelectedPieceIndex(-1);

    if (checkAndHandleGameEnd()) {
      return;
    }

    if (move.get_forced_moves_js().length === 0) {
      handleComputerMove();
      return;
    }

    updatePlayerMoves();
    setSelectedPieceIndex(move.end_square);
  };

  const mappedSquares = boardPieces.map((piece, pieceIndex) => {
    const squareIndex =
      playerColor === Color.White ? 63 - pieceIndex : pieceIndex;

    return (
      <>
        <CheckersBoardSquare
          key={squareIndex}
          piece={piece}
          index={squareIndex}
          selectedMoves={selectedMoves}
          highlighted={highlightedSquares.includes(squareIndex)}
          selected={selectedPieceIndex === squareIndex}
          onMove={handlePlayerMove}
          onSelect={handleSelect}
          onClearSelect={handleClearSelect}
        />
      </>
    );
  });

  return <div className={style.board}>{mappedSquares}</div>;
}

export default CheckersBoard;
