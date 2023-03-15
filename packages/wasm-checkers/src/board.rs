use serde::{Deserialize, Serialize};
use wasm_bindgen::{prelude::wasm_bindgen, JsValue};

use crate::{
    constants::{Color, Piece},
    move_generation::{Move, MoveGeneration},
    util::BitUtil,
};

#[wasm_bindgen]
#[derive(Clone, Copy, Serialize, Deserialize, Debug)]
pub struct Board {
    #[wasm_bindgen(skip)]
    pub bitboards: [[u64; 2]; 2],
}

#[wasm_bindgen]
impl Board {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        let mut board = Board {
            bitboards: [[0; 2]; 2],
        };

        board.init_default_state();
        board
    }

    #[wasm_bindgen]
    pub fn from_json(json: String) -> Self {
        serde_json::from_str(&json).unwrap()
    }

    #[wasm_bindgen]
    pub fn to_json(&self) -> String {
        serde_json::to_string(self).unwrap()
    }

    #[wasm_bindgen()]
    pub fn init_default_state(&mut self) {
        self.bitboards = [[0x0000000000aa55aa, 0], [0x55aa550000000000, 0]];
    }

    #[wasm_bindgen()]
    pub fn get_bitboard(&self, color: Color, king: bool) -> u64 {
        let index = match king {
            true => 1,
            false => 0,
        };

        match color {
            Color::White | Color::Black => self.bitboards[color.get_bitboard_index()][index],
            Color::Empty => 0,
        }
    }

    #[wasm_bindgen()]
    pub fn has_piece(&self, color: Color, index: u64) -> bool {
        let [pieces, kings] = self.bitboards[color.get_bitboard_index()];
        BitUtil::is_set(pieces | kings, index)
    }

    #[wasm_bindgen()]
    pub fn is_king(&self, color: Color, index: u64) -> bool {
        let [_, kings] = self.bitboards[color.get_bitboard_index()];
        BitUtil::is_set(kings, index)
    }

    #[wasm_bindgen()]
    pub fn get_piece(&self, index: u64) -> Piece {
        if self.has_piece(Color::White, index) {
            return Piece {
                color: Color::White,
                is_king: self.is_king(Color::White, index),
            };
        }

        if self.has_piece(Color::Black, index) {
            return Piece {
                color: Color::Black,
                is_king: self.is_king(Color::Black, index),
            };
        }

        Piece {
            color: Color::Empty,
            is_king: false,
        }
    }

    #[wasm_bindgen()]
    pub fn get_pieces(&self) -> js_sys::Array {
        let mut pieces = Vec::new();

        for i in 0..64 {
            pieces.push(self.get_piece(i));
        }

        pieces.into_iter().map(JsValue::from).collect()
    }

    #[wasm_bindgen]
    pub fn update_from_move(&mut self, board_move: &Move) {
        self.bitboards = board_move.board_after_move;
    }

    #[wasm_bindgen]
    pub fn is_game_over(&self) -> bool {
        let white_pieces = self.bitboards[0][0] | self.bitboards[0][1];
        let black_pieces = self.bitboards[1][0] | self.bitboards[1][1];

        if white_pieces == 0 || black_pieces == 0 {
            return true;
        }

        let white_moves = MoveGeneration::generate_all_moves(self, Color::White);
        let black_moves = MoveGeneration::generate_all_moves(self, Color::Black);

        if white_moves.len() == 0 || black_moves.len() == 0 {
            return true;
        }

        false
    }
}
