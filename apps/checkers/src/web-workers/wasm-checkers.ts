import init, { Board, Color, CheckersAi } from 'wasm-checkers';

export const initWasm = async () => {
  await init();
};

export const getBestMove = (
  boardJson: string,
  color: Color,
  depth: number
): string => {
  const board = Board.from_json(boardJson);
  const bestMove = CheckersAi.get_best_move_alphabeta(board, color, depth);
  return bestMove.to_json();
};
