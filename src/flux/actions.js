// which part of the store each item is in
export const TROLL_COUNT = "TROLL_COUNT";

// TROLL_COUNT
// =============================================================================
/**
 * Increments the troll-count in the store by one
 */
export const setTrollCount = troll_count => ({
    type: TROLL_COUNT,
    execute: function(state = 0) {
        return troll_count;
    }
});
