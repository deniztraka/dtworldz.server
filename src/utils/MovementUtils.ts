import { Direction } from "../models/Direction";

export class MovementUtils {
    static getDirection(movement: { horizontal: number, vertical: number }) : Direction {
        if (movement.horizontal < 0) {
            return Direction.East;
        }
        else if (movement.horizontal > 0) {
            return Direction.West;
        }
        else {
            if (movement.vertical < 0) {
                return Direction.South;
            }
            else if (movement.vertical > 0) {
                return Direction.North;
            }
        }

        return Direction.None;
    }

    static getDirectionToTarget(source: { x: number, y: number }, target: { x: number, y: number }) : Direction {
        if (target.x < source.x) {
            return Direction.East;
        }
        else if (target.x > source.x) {
            return Direction.West;
        }
        else {
            if (target.y < source.y) {
                return Direction.South;
            }
            else if (target.y > source.y) {
                return Direction.North;
            }
        }
    }
}