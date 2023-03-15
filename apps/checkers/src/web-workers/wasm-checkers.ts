import init, { Board, CheckersAi } from 'wasm-checkers';

export const initWasm = async () => {
  if (!import.meta.env.VITE_WASM_PATH) {
    await init();
  } else {
    await init(import.meta.env.VITE_WASM_PATH);
  }
};

export const getBestMove = async (
  boardJson: string,
  color: any,
  depth: number
): Promise<string> => {
  const board = Board.from_json(boardJson);
  const bestMove = CheckersAi.get_best_move_alphabeta(board, color, depth);
  return bestMove.to_json();
};
