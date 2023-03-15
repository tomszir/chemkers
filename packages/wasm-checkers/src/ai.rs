use std::cmp;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::{
    board::Board,
    constants::Color,
    move_generation::{Move, MoveGeneration},
};

#[wasm_bindgen]
pub struct CheckersAi;

#[wasm_bindgen]
impl CheckersAi {
    #[wasm_bindgen]
    pub fn get_heuristic_value(board: &Board) -> i16 {
        let mut eval = 0_i16;
        let piece_value = 3;
        let king_value = 6;

        for (square, piece) in (0..64).map(|i| (i, board.get_piece(i))) {
            let score = piece.color.get_score_multiplier();
            let attacking_moves = MoveGeneration::generate_attacking_moves_in_range(
                board,
                piece.color,
                square..square + 1,
            );
            let protecting_moves =
                MoveGeneration::generate_moves_in_range(board, piece.color, square..square + 1);

            // Basic piece values
            eval += match piece.is_king {
                false => piece_value,
                true => king_value,
            } * score;

            // Piece can attack other pieces
            for attacking_move in attacking_moves {
                eval += match attacking_move.can_capture_again {
                    false => piece_value,
                    true => king_value,
                } * score;
            }

            // Add a point for each square a piece can move to
            for _ in protecting_moves {
                eval += 1 * score;
            }

            // Piece controls the center
            eval += match piece.color {
                Color::White => {
                    if (17..22).contains(&square) {
                        1
                    } else {
                        0
                    }
                }
                Color::Black => {
                    if (33..37).contains(&square) {
                        1
                    } else {
                        0
                    }
                }
                _ => 0,
            } * score;

            // Piece protects the king row
            eval += match piece.color {
                Color::White => {
                    if square == 1 || square == 5 {
                        2
                    } else {
                        0
                    }
                }
                Color::Black => {
                    if square == 62 || square == 58 {
                        2
                    } else {
                        0
                    }
                }
                _ => 0,
            } * score;

            // Piece is not a central piece (can only attack 1 square)
            eval += if square == 8
                || square == 24
                || square == 40
                || square == 56
                || square == 7
                || square == 23
                || square == 39
                || square == 55
            {
                0
            } else {
                1
            } * score;
        }

        eval
    }

    #[wasm_bindgen]
    pub fn alphabeta(
        board: &Board,
        color: Color,
        depth: u32,
        mut alpha: i16,
        mut beta: i16,
    ) -> i16 {
        if depth == 0 {
            return Self::get_heuristic_value(&board);
        }

        let moves = MoveGeneration::generate_all_moves(&board, color);

        if matches!(color, Color::White) {
            let mut best_value = i16::MIN;

            for board_move in moves {
                let mut board_copy = board.clone();
                board_copy.update_from_move(&board_move);
                best_value = cmp::max(
                    best_value,
                    Self::alphabeta(
                        &board_copy,
                        if board_move.can_capture_again {
                            color
                        } else {
                            Color::Black
                        },
                        depth - 1,
                        alpha,
                        beta,
                    ),
                );

                if best_value > beta {
                    break;
                }

                alpha = cmp::max(alpha, best_value);
            }

            return best_value;
        } else {
            let mut best_value = i16::MAX;

            for board_move in moves {
                let mut board_copy = board.clone();
                board_copy.update_from_move(&board_move);
                best_value = cmp::min(
                    best_value,
                    Self::alphabeta(
                        &board_copy,
                        if board_move.can_capture_again {
                            color
                        } else {
                            Color::White
                        },
                        depth - 1,
                        alpha,
                        beta,
                    ),
                );

                if best_value < alpha {
                    break;
                }

                beta = cmp::min(beta, best_value);
            }

            return best_value;
        }
    }

    #[wasm_bindgen]
    pub fn get_best_move_alphabeta(board: &Board, color_to_move: Color, mut depth: u32) -> Move {
        let mut moves = MoveGeneration::generate_all_moves(&board, color_to_move);

        // What's the point of doing lookahead if you can only do one move
        if moves.len() == 1 {
            return moves[0];
        }

        // Check if any move did a capture
        if moves[0].did_capture {
            let can_capture_again: Vec<_> = moves
                .clone()
                .into_iter()
                .filter(|attacking_move| attacking_move.can_capture_again)
                .collect();

            if can_capture_again.len() > 0 {
                moves = can_capture_again;
                depth = 5;
            }
        }

        let pair: Vec<_> = moves
            .iter()
            .map(|board_move| {
                let mut board_clone = board.clone();
                board_clone.update_from_move(&board_move);
                return (
                    board_move,
                    Self::alphabeta(
                        &board_clone,
                        color_to_move.get_opposite_color(),
                        depth - 1,
                        i16::MIN,
                        i16::MAX,
                    ),
                );
            })
            .collect();
        let best_pair = match color_to_move {
            Color::White => pair.iter().max_by_key(|(_, value)| value),
            Color::Black => pair.iter().min_by_key(|(_, value)| value),
            Color::Empty => None,
        };

        match best_pair {
            Some((best_move, _)) => **best_move,
            None => moves[0],
        }
    }
}
