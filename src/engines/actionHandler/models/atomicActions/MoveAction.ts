import { World } from "../../../../rooms/World";
import { BaseMobileSchema } from "../../../../schema/mobiles/BaseMobileSchema";
import { BaseAtomicAction } from "../BaseAtomicAction";

interface MoveInputPayload {
    horizontal: number;
    vertical: number;
    isRunning: boolean;
}

export class MoveAction extends BaseAtomicAction {
    lastPositionChangeX: number;
    lastPositionChangeY: number;
    constructor(mobile: BaseMobileSchema, payload: MoveInputPayload, tick: number) {
        super(mobile, payload, tick);
    }
    execute(world: World, deltaTime: number) {
        this.mobile.tick = this.tick;
        this.mobile.speed = this.payload.isRunning ? this.mobile.baseSpeed + 2 : this.mobile.baseSpeed;

        this.lastPositionChangeX = (this.payload.horizontal * this.mobile.speed * deltaTime / 1000);
        this.lastPositionChangeY = (this.payload.vertical * this.mobile.speed * deltaTime / 1000);

        this.mobile.position.x += this.lastPositionChangeX;
        this.mobile.position.y += this.lastPositionChangeY;

        this.mobile.isMoving = this.lastPositionChangeX != 0 || this.lastPositionChangeY != 0;
        this.mobile.isRunning = this.payload.isRunning
    }
}