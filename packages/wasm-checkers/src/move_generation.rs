use std::ops::Range;

use js_sys::Array;
use wasm_bindgen::{prelude::wasm_bindgen, JsValue};

use crate::{
    bitboard::Bitboard,
    board::Board,
    board_move::Move,
    constants::{Color, MoveType, Piece},
    move_util::MoveUtil,
    settings::{CheckersSetting, CheckersSettings},
};

#[wasm_bindgen]
pub struct MoveGenerator;

impl MoveGenerator {
    pub fn get_moves_for_square(
        bitboard: &Bitboard,
        move_type: MoveType,
        square: u16,
        color: Color,
        settings: u16,
    ) -> Vec<Move> {
        let mut result = Vec::new();

        if !bitboard.is_color_occupied(color, square) {
            return result;
        }

        let piece = bitboard.get_piece_by_color(color, square).unwrap();
        let opposite_color = color.get_opposite();
        let move_diagonals = MoveUtil::get_move_diagonals(piece, move_type, settings);

        for diagonal in move_diagonals {
            let capture_end_squares = MoveUtil::get_capture_end_squares(
                &bitboard, move_type, settings, piece, square, diagonal,
            );

            for (captures, end) in capture_end_squares {
                if !MoveUtil::is_diagonal_within_bounds(move_type, diagonal, square) {
                    continue;
                }

                if bitboard.is_occupied(end) {
                    continue;
                }

                let captured_pieces: Vec<(Piece, u16)> = match move_type {
                    MoveType::Attack => {
                        let mut pieces = vec![];

                        for capture in captures.clone() {
                            if bitboard.is_color_occupied(opposite_color, capture) {
                                match bitboard.get_piece(capture) {
                                    Some(piece) => pieces.push((piece, capture)),
                                    _ => {}
                                }
                            }
                        }

                        pieces
                    }
                    _ => vec![],
                };

                match move_type {
                    MoveType::Attack => {
                        if captured_pieces.len() == 0 {
                            continue;
                        }
                    }
                    _ => {}
                }

                let did_promote = MoveUtil::is_color_on_promotion_square(color, end);
                let mut bitboard_after_move = bitboard.clone();
                let piece_after_move = Piece {
                    color,
                    king: piece.king || did_promote,
                };

                bitboard_after_move.unset_square(piece, square);
                bitboard_after_move.set_square(piece_after_move, end);

                for (captured_piece, capture) in captured_pieces.clone().into_iter() {
                    bitboard_after_move.unset_square(captured_piece, capture);
                }

                let forced_moves = match move_type {
                    MoveType::Attack => {
                        if did_promote
                            && CheckersSettings::contains(
                                settings,
                                CheckersSetting::PromotionMoveTermination,
                            )
                        {
                            vec![]
                        } else {
                            Self::get_moves_for_square(
                                &bitboard_after_move,
                                move_type,
                                end,
                                color,
                                settings,
                            )
                        }
                    }
                    _ => vec![],
                };

                result.push(Move {
                    start_square: square,
                    end_square: end,
                    moved_piece: piece,
                    moved_piece_after_move: piece_after_move,
                    captured_pieces,
                    forced_moves,
                    bitboard_after_move,
                })
            }
        }

        result
    }

    pub fn get_moves_in_range(
        bitboard: &Bitboard,
        color: Color,
        move_type: MoveType,
        range: Range<u16>,
        settings: u16,
    ) -> Vec<Move> {
        let mut moves = Vec::new();

        for square in range {
            moves.push(Self::get_moves_for_square(
                bitboard, move_type, square, color, settings,
            ));
        }

        moves.into_iter().flatten().collect()
    }

    pub fn get_valid_moves(bitboard: &Bitboard, color: Color, settings: u16) -> Vec<Move> {
        let attacking_moves =
            Self::get_moves_in_range(bitboard, color, MoveType::Attack, 0..64, settings);
        let get_advancing_moves =
            || Self::get_moves_in_range(bitboard, color, MoveType::Advance, 0..64, settings);

        if CheckersSettings::contains(settings, CheckersSetting::ForcedCapture) {
            if attacking_moves.len() > 0 {
                return attacking_moves;
            }
            return get_advancing_moves();
        }

        let advancing_moves = get_advancing_moves();
        let mut attack_move_squares: Vec<(u16, u16)> = vec![];
        return [attacking_moves, advancing_moves]
            .concat()
            .into_iter()
            .filter(|m| {
                if m.captured_pieces.len() > 0 {
                    attack_move_squares.push((m.start_square, m.end_square));
                } else {
                    if attack_move_squares.contains(&(m.start_square, m.end_square)) {
                        return false;
                    }
                }

                return true;
            })
            .collect();
    }
}

#[wasm_bindgen]
impl MoveGenerator {
    #[wasm_bindgen]
    pub fn get_valid_moves_js(board: &Board, color_to_move: Color, settings: u16) -> Array {
        Self::get_valid_moves(&board.bitboard, color_to_move, settings)
            .into_iter()
            .map(JsValue::from)
            .collect()
    }
}
