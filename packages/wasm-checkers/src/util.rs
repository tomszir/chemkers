pub struct BitUtil {}

impl BitUtil {
    pub fn is_set(number: u64, index: u64) -> bool {
        (number & (1_u64 << index)) != 0
    }
}
