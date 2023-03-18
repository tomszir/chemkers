use std::cmp;
use wasm_bindgen::{prelude::wasm_bindgen, JsValue};

use crate::{
    bitboard::Bitboard,
    board::Board,
    board_move::Move,
    constants::{Color, MoveType},
    log,
    move_generation::MoveGenerator,
};

#[wasm_bindgen]
pub struct CheckersAi;

impl CheckersAi {
    pub fn alphabeta(
        bitboard: &Bitboard,
        color: Color,
        depth: u32,
        settings: u16,
        mut alpha: i16,
        mut beta: i16,
        forced_moves: Vec<Move>,
    ) -> i16 {
        if depth == 0 {
            return Self::get_heuristic_value(&bitboard, settings);
        }

        let moves = if forced_moves.len() == 0 {
            MoveGenerator::get_valid_moves(&bitboard, color, settings)
        } else {
            forced_moves
        };

        if matches!(color, Color::White) {
            let mut best_value = i16::MIN;

            for board_move in moves {
                let mut bitboard_after_move = bitboard.clone();
                bitboard_after_move.update_from_move(&board_move);
                best_value = cmp::max(
                    best_value,
                    Self::alphabeta(
                        &bitboard_after_move,
                        if board_move.forced_moves.len() > 0 {
                            color
                        } else {
                            Color::Black
                        },
                        depth - 1,
                        settings,
                        alpha,
                        beta,
                        board_move.forced_moves,
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
                let mut bitboard_after_move = bitboard.clone();
                bitboard_after_move.update_from_move(&board_move);
                best_value = cmp::min(
                    best_value,
                    Self::alphabeta(
                        &bitboard_after_move,
                        if board_move.forced_moves.len() > 0 {
                            color
                        } else {
                            Color::White
                        },
                        depth - 1,
                        settings,
                        alpha,
                        beta,
                        board_move.forced_moves,
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
}

#[wasm_bindgen]
impl CheckersAi {
    #[wasm_bindgen]
    pub fn get_heuristic_value(bitboard: &Bitboard, settings: u16) -> i16 {
        let mut eval = 0_i16;
        let piece_value = 3;
        let king_value = 6;

        for (square, piece_option) in (0..64).map(|i| (i, bitboard.get_piece(i))) {
            if piece_option.is_none() {
                continue;
            }

            let piece = piece_option.unwrap();
            let score = piece.color.get_score_multiplier();
            let attacking_moves = MoveGenerator::get_moves_for_square(
                bitboard,
                MoveType::Attack,
                square,
                piece.color,
                settings,
            );
            let protecting_moves = MoveGenerator::get_moves_for_square(
                bitboard,
                MoveType::Advance,
                square,
                piece.color,
                settings,
            );

            // Basic piece values
            eval += match piece.king {
                false => piece_value,
                true => king_value,
            } * score;

            // Piece can attack other pieces
            for attacking_move in attacking_moves {
                eval += match attacking_move.captured_pieces.len() > 0 {
                    true => piece_value,
                    false => 0,
                    // false => piece_value,
                    // true => king_value,
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
    pub fn get_best_move_alphabeta(
        board: &Board,
        color_to_move: Color,
        depth: u32,
        settings: u16,
        previous_move: Option<Move>,
    ) -> Option<Move> {
        let valid_moves = MoveGenerator::get_valid_moves(&board.bitboard, color_to_move, settings);
        let moves: Vec<Move> = match previous_move {
            Some(board_move) => {
                if board_move.forced_moves.len() > 0 {
                    board_move.forced_moves
                } else {
                    valid_moves
                }
            }
            _ => valid_moves,
        };

        if moves.len() == 0 {
            return None;
        }

        if moves.len() == 1 {
            return Some(moves[0].clone());
        }

        let pair: Vec<_> = moves
            .iter()
            .map(|board_move| {
                let mut board_after_move = board.bitboard.clone();
                board_after_move.update_from_move(&board_move);
                return (
                    board_move,
                    Self::alphabeta(
                        &board_after_move,
                        color_to_move.get_opposite(),
                        depth - 1,
                        settings,
                        i16::MIN,
                        i16::MAX,
                        board_move.forced_moves.clone(),
                    ),
                );
            })
            .collect();

        let best_pair = match color_to_move {
            Color::White => pair.iter().max_by_key(|(_, value)| value),
            Color::Black => pair.iter().min_by_key(|(_, value)| value),
            _ => None,
        };

        Some(match best_pair {
            Some((best_move, _)) => (**best_move).clone(),
            None => moves[0].clone(),
        })
    }
}
