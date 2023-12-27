import { World } from "../../../../rooms/World";
import { BaseMobileSchema } from "../../../../schema/mobiles/BaseMobileSchema";
import { BaseAtomicAction } from "../BaseAtomicAction";

interface AttackInputPayload {
    horizontal: number;
    vertical: number;
}

export class AttackAction extends BaseAtomicAction {
    constructor(mobile: BaseMobileSchema, payload: AttackInputPayload, tick: number) {
        super(mobile, payload, tick);
    }
    execute(world: World, deltaTime: number) {
        this.mobile.tick = this.tick;

        console.log("AttackAction");
        //world.state.spatialGrid.checkCollision(this.mobile, collisionCallback.bind(this));
    }
}

function collisionCallback() {
    console.log("collisionCallback");
}

