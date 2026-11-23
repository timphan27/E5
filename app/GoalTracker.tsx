import { hasCrate, type Puzzle } from "../core/mod.ts";

// Derived state: the count is computed from the puzzle on every render, so it
// can never disagree with the board.
export function GoalTracker({ puzzle }: { puzzle: Puzzle }) {
  const filled = puzzle.layout.goals.filter((g) => hasCrate(puzzle, g)).length;
  return (
    <p>
      Goals filled: {filled} of {puzzle.layout.goals.length}
    </p>
  );
}
