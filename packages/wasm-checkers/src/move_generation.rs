use crate::{board::Board, constants::Color, util::BitUtil};
use js_sys::Array;
use serde::{Deserialize, Serialize};
use std::ops::Range;
use wasm_bindgen::{prelude::wasm_bindgen, JsValue};

#[wasm_bindgen]
#[derive(Copy, Clone, Serialize, Deserialize)]
pub struct Move {
    pub start_square: u8,
    pub end_square: u8,
    pub capture_square: u8,
    pub did_capture: bool,
    pub can_capture_again: bool,
    pub did_king: bool,
    #[wasm_bindgen(skip)]
    pub board_after_move: [[u64; 2]; 2],
}

#[wasm_bindgen]
impl Move {
    #[wasm_bindgen]
    pub fn from_json(json: String) -> Self {
        serde_json::from_str(&json).unwrap()
    }

    #[wasm_bindgen]
    pub fn to_json(&self) -> String {
        serde_json::to_string(self).unwrap()
    }
}

#[wasm_bindgen]
pub struct MoveGeneration {}

impl MoveGeneration {
    pub fn generate_all_moves(board: &Board, color_to_move: Color) -> Vec<Move> {
        let moves = Self::generate_attacking_moves(board, color_to_move);

        if moves.len() == 0 {
            return Self::generate_moves(board, color_to_move);
        }

        moves
    }

    pub fn generate_attacking_moves_for_square(
        board: &Board,
        color_to_move: Color,
        owned_index: usize,
        other_index: usize,
        owned_pieces: u64,
        owned_kings: u64,
        other_pieces: u64,
        other_kings: u64,
        occupied: u64,
        king_promotion_squares: &Range<u64>,
        start_square: u64,
        with_can_capture_again_check: bool,
    ) -> Vec<Move> {
        let mut moves = Vec::new();

        // Target square doesn't contain our piece
        if !((owned_pieces & (1_u64 << start_square)) != 0) {
            return moves;
        }

        let is_king = BitUtil::is_set(owned_kings, start_square);
        let steps = if is_king {
            vec![
                [7, 14, 0, 1],
                [9, 18, 7, 6],
                [-9, -18, 0, 1],
                [-7, -14, 7, 6],
            ]
        } else {
            match color_to_move {
                Color::White => vec![[7, 14, 0, 1], [9, 18, 7, 6]],
                Color::Black => vec![[-9, -18, 0, 1], [-7, -14, 7, 6]],
                _ => vec![],
            }
        };

        // Iterate through the left & right move steps
        for [capture_step, end_step, first_wrap_check, second_wrap_check] in steps.iter() {
            let capture_square = (start_square as i8) + capture_step;
            let end_square = (start_square as i8) + end_step;
            let did_king = king_promotion_squares.contains(&(end_square as u64));

            // Can't be bothered to do any more wrapping logic
            if !(0..64).contains(&end_square) {
                continue;
            }

            // Check if capture square doesn't contain our own piece and the end square
            // isn't occupied
            if !BitUtil::is_set(other_pieces, capture_square as u64)
                || BitUtil::is_set(occupied, end_square as u64)
            {
                continue;
            }

            // Prevent wrapping outside of the board
            if start_square % 8 == *first_wrap_check as u64
                || start_square % 8 == *second_wrap_check as u64
            {
                continue;
            }

            let owned_pieces_after_move = if is_king {
                owned_pieces & (!(1_u64 << start_square))
            } else {
                (owned_pieces & (!(1_u64 << start_square))) | (1_u64 << end_square)
            };

            let owned_kings_after_move = if is_king {
                (owned_kings & (!(1_u64 << start_square))) | (1_u64 << end_square)
            } else {
                if did_king {
                    owned_kings | (1_u64 << end_square)
                } else {
                    owned_kings
                }
            };

            let other_pieces_after_move = other_pieces & (!(1_u64 << capture_square));
            let other_kings_after_move = other_kings & (!(1_u64 << capture_square));

            let mut board_after_move = board.bitboards;
            board_after_move[owned_index] = [owned_pieces_after_move, owned_kings_after_move];
            board_after_move[other_index] = [other_pieces_after_move, other_kings_after_move];

            let can_capture_again = if with_can_capture_again_check {
                Self::generate_attacking_moves_for_square(
                    &Board {
                        bitboards: board_after_move,
                    },
                    color_to_move,
                    owned_index,
                    other_index,
                    owned_pieces_after_move | owned_kings_after_move,
                    owned_kings_after_move,
                    other_pieces_after_move | other_kings_after_move,
                    other_kings_after_move,
                    owned_pieces_after_move
                        | owned_kings_after_move
                        | other_pieces_after_move
                        | other_kings_after_move,
                    &king_promotion_squares,
                    end_square as u64,
                    false,
                )
                .len()
                    > 0
            } else {
                false
            };

            moves.push(Move {
                start_square: start_square as u8,
                end_square: end_square as u8,
                capture_square: capture_square as u8,
                board_after_move,
                did_capture: true,
                can_capture_again,
                did_king,
            });
        }

        moves
    }

    pub fn generate_moves_for_square(
        board: &Board,
        color_to_move: Color,
        owned_index: usize,
        owned_pieces: u64,
        owned_kings: u64,
        occupied: u64,
        king_promotion_squares: &Range<u64>,
        start_square: u64,
    ) -> Vec<Move> {
        let mut moves = Vec::new();

        // Target square doesn't contain our piece
        if !((owned_pieces & (1_u64 << start_square)) != 0) {
            return moves;
        }

        let is_king = BitUtil::is_set(owned_kings, start_square);
        let steps = if is_king {
            vec![[7, 0], [9, 7], [-9, 0], [-7, 7]]
        } else {
            match color_to_move {
                Color::White => vec![[7, 0], [9, 7]],
                Color::Black => vec![[-9, 0], [-7, 7]],
                _ => vec![],
            }
        };

        // Iterate through the left & right move steps
        for [end_step, wrap_check] in steps.iter() {
            let end_square = start_square as i8 + end_step;
            let did_king = king_promotion_squares.contains(&(end_square as u64));

            // Can't be bothered to do any more wrapping logic
            if !(0..64).contains(&end_square) {
                continue;
            }

            // Check if capture square doesn't contain our own piece and the end square
            // isn't occupied
            if BitUtil::is_set(occupied, end_square as u64) {
                continue;
            }

            // Prevent wrapping outside of the board
            if start_square % 8 == *wrap_check as u64 {
                continue;
            }

            let owned_pieces_after_move = if is_king {
                owned_pieces & (!(1_u64 << start_square))
            } else {
                (owned_pieces & (!(1_u64 << start_square))) | (1_u64 << end_square)
            };

            let owned_kings_after_move = if is_king {
                (owned_kings & (!(1_u64 << start_square))) | (1_u64 << end_square)
            } else {
                if did_king {
                    owned_kings | (1_u64 << end_square)
                } else {
                    owned_kings
                }
            };

            let mut board_after_move = board.bitboards;
            board_after_move[owned_index] = [owned_pieces_after_move, owned_kings_after_move];

            moves.push(Move {
                start_square: start_square as u8,
                end_square: end_square as u8,
                capture_square: 0,
                board_after_move,
                did_capture: false,
                can_capture_again: false,
                did_king,
            });
        }

        moves
    }

    pub fn generate_attacking_moves_in_range(
        board: &Board,
        color_to_move: Color,
        range: Range<u64>,
    ) -> Vec<Move> {
        let opposite_color = color_to_move.get_opposite_color();
        let king_promotion_squares = color_to_move.get_promotion_square();
        let owned_kings = board.get_bitboard(color_to_move, true);
        let other_kings = board.get_bitboard(opposite_color, true);
        let owned_pieces = board.get_bitboard(color_to_move, false) | owned_kings;
        let other_pieces = board.get_bitboard(opposite_color, false) | other_kings;
        let owned_index = color_to_move.get_bitboard_index();
        let other_index = opposite_color.get_bitboard_index();
        let occupied = owned_pieces | other_pieces;
        let generated_moves: Vec<_> = range
            .into_iter()
            .map(|start_square| {
                return Self::generate_attacking_moves_for_square(
                    board,
                    color_to_move,
                    owned_index,
                    other_index,
                    owned_pieces,
                    owned_kings,
                    other_pieces,
                    other_kings,
                    occupied,
                    &king_promotion_squares,
                    start_square,
                    true,
                );
            })
            .flatten()
            .collect();

        generated_moves
    }

    pub fn generate_attacking_moves(board: &Board, color_to_move: Color) -> Vec<Move> {
        Self::generate_attacking_moves_in_range(&board, color_to_move, 0..64)
    }

    pub fn generate_moves_in_range(
        board: &Board,
        color_to_move: Color,
        range: Range<u64>,
    ) -> Vec<Move> {
        let opposite_color = color_to_move.get_opposite_color();
        let king_promotion_squares = color_to_move.get_promotion_square();
        let owned_kings = board.get_bitboard(color_to_move, true);
        let other_kings = board.get_bitboard(opposite_color, true);
        let owned_pieces = board.get_bitboard(color_to_move, false) | owned_kings;
        let other_pieces = board.get_bitboard(opposite_color, false) | other_kings;
        let owned_index = color_to_move.get_bitboard_index();
        let occupied = owned_pieces | other_pieces;
        let generated_moves: Vec<_> = range
            .into_iter()
            .map(|start_square| {
                return Self::generate_moves_for_square(
                    &board,
                    color_to_move,
                    owned_index,
                    owned_pieces,
                    owned_kings,
                    occupied,
                    &king_promotion_squares,
                    start_square,
                );
            })
            .flatten()
            .collect();

        generated_moves
    }

    pub fn generate_moves(board: &Board, color_to_move: Color) -> Vec<Move> {
        Self::generate_moves_in_range(&board, color_to_move, 0..64)
    }
}

#[wasm_bindgen]
impl MoveGeneration {
    #[wasm_bindgen]
    pub fn generate_all_moves_js(board: &Board, color_to_move: Color) -> Array {
        Self::generate_all_moves(&board, color_to_move)
            .into_iter()
            .map(JsValue::from)
            .collect()
    }
}
