use std::ops::Range;

use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
pub struct Piece {
    pub color: Color,
    pub is_king: bool,
}

#[repr(u32)]
#[wasm_bindgen]
#[derive(Clone, Copy)]
pub enum Color {
    Empty = 0,
    White = 1,
    Black = 2,
}

impl Color {
    pub fn get_bitboard_index(&self) -> usize {
        match self {
            Color::White => 0,
            Color::Black => 1,
            Color::Empty => 2,
        }
    }

    pub fn get_opposite_color(&self) -> Self {
        match self {
            Color::White => Color::Black,
            Color::Black => Color::White,
            _ => Color::Empty,
        }
    }

    pub fn get_promotion_square(&self) -> Range<u64> {
        match self {
            Color::Black => (0..8),
            Color::White => (56..64),
            _ => (0..0),
        }
    }

    pub fn get_side_of_board(&self) -> Range<u64> {
        match self {
            Color::Black => (0..32),
            Color::White => (32..64),
            _ => (0..0),
        }
    }

    pub fn get_score_multiplier(&self) -> i16 {
        match self {
            Color::White => 1,
            Color::Black => -1,
            Color::Empty => 0,
        }
    }
}
