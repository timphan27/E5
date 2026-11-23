import type { Command, Direction, Position, Session } from "../core/mod.ts";
import type { Controller } from "./controllers.ts";
import type { BoardInput } from "./tileClicks.ts";

function directionTo(from: Position, to: Position): Direction | undefined {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  if (dx === 0 && dy === -1) return "up";
  if (dx === 0 && dy === 1) return "down";
  if (dx === -1 && dy === 0) return "left";
  if (dx === 1 && dy === 0) return "right";
  return undefined;
}

export const clickToMove: Controller = {
  label: "Click a neighboring tile",
  attach(session: Session, board: BoardInput) {
    return board.onTileClick((at) => {
      const player = session.getState().puzzle.player;
      const direction = directionTo(player, at);
      if (direction) {
        const command: Command = { kind: "move", direction };
        session.dispatch(command);
      }
    });
  },
};
