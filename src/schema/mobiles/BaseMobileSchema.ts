import { Schema, type, ArraySchema, filter } from "@colyseus/schema";
import { Position } from "../Position";

export abstract class BaseMobileSchema extends Schema {
    @type("string") name: string = "";
    @type("number") speed: number;
    @type("boolean") isRunning: boolean;
    @type("boolean") isMoving: boolean;
    @type(Position) position: Position;
    lastPosition: Position;
    // @type("number") health: number;
    // @type("number") energy: number;
    // @type("number") dexterity: number;
    // @type("number") strength: number;
    // @type("number") intelligence: number;
    @type("number") tick: number;
    baseSpeed: number = 1;

    constructor(name: string = "", x: number = 10, y: number = 10) {
        super();
        this.name = name;
        this.speed = this.baseSpeed; // 1 = 1 tile per second
        this.position = new Position(x,y);
        this.lastPosition = this.position;
        this.isRunning = false;
    }
}