import { Direction } from "../../../../models/Direction";
import { World } from "../../../../rooms/World";
import { Position } from "../../../../schema/components/Position";
import { BaseMobileSchema } from "../../../../schema/mobiles/BaseMobileSchema";
import { MovementUtils } from "../../../../utils/MovementUtils";
import { BaseAtomicAction } from "../BaseAtomicAction";

interface MoveInputPayload {
    horizontal: number;
    vertical: number;
    isRunning: boolean;
}

export class MoveAction extends BaseAtomicAction {
    constructor(mobile: BaseMobileSchema, payload: MoveInputPayload, tick: number) {
        super(mobile, payload, tick);
    }
    execute(world: World, deltaTime: number) {
        this.mobile.tick = this.tick;
        this.mobile.speed = this.payload.isRunning ? this.mobile.baseSpeed + 2 : this.mobile.baseSpeed;

        const lastPositionChangeX = (this.payload.horizontal * this.mobile.speed * deltaTime / 1000);
        const lastPositionChangeY = (this.payload.vertical * this.mobile.speed * deltaTime / 1000);

        let resultPositionX = this.mobile.position.x + lastPositionChangeX;
        let resultPositionY = this.mobile.position.y + lastPositionChangeY;


        if (resultPositionX < 0) {
            resultPositionX = 0;
        }
        if (resultPositionY < 0) {
            resultPositionY = 0;
        }
        if (resultPositionX > world.state.width) {
            resultPositionX = world.state.width;
        }
        if (resultPositionY > world.state.height) {
            resultPositionY = world.state.height;
        }

        this.mobile.position.x = resultPositionX;
        this.mobile.position.y = resultPositionY;
        this.mobile.position.setDirty(0);
        this.mobile.position.setDirty(1);

        // updating position in the world and in the grid
        world.state.spatialGrid.moveObjectInGrid(this.mobile, resultPositionX, resultPositionY);

        //console.log(this.mobile.position.x, this.mobile.position.y);

        let direction =  MovementUtils.getDirection(this.payload);
        if(direction != Direction.None) {
            this.mobile.direction = direction;
        }

        this.mobile.isMoving = lastPositionChangeX != 0 || lastPositionChangeY != 0;
        this.mobile.isRunning = this.payload.isRunning;
    }
}