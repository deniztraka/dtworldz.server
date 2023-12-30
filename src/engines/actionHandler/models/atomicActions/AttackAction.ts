import { World } from "../../../../rooms/World";
import { BaseMobileSchema } from "../../../../schema/mobiles/BaseMobileSchema";
import { MovementUtils } from "../../../../utils/MovementUtils";
import { BaseAtomicAction } from "../BaseAtomicAction";

export class AttackAction extends BaseAtomicAction {
    constructor(mobile: BaseMobileSchema, payload:any, tick: number) {
        super(mobile, payload, tick);
    }
    execute(world: World, deltaTime: number) {
        this.mobile.tick = this.tick;

        console.log("AttackAction");
        if(!this.mobile.target){
            console.log("No target");
            return;
        }

        let target = world.state.players.get(this.mobile.target);
        if(!target) {
            this.mobile.target = null;
            console.log("No target");
            return;
        }

        // get distance between mobile and target and check if it's in range
        let distance = Math.sqrt(Math.pow(this.mobile.position.x - target.position.x, 2) + Math.pow(this.mobile.position.y - target.position.y, 2));
        console.log("Distance: " + distance);
        if(distance > 1) {
            console.log("Too far away");
            return;
        }

        console.log("DirectionBeforeAttack: " + this.mobile.direction);
        this.mobile.direction = MovementUtils.getDirectionToTarget(this.mobile.position, target.position);
        console.log("DirectionAfterAttack: " + this.mobile.direction);

        // attack to target
        this.mobile.tryTakeDamage(target);

        // we dont check collision for player attacks for now
        //world.state.spatialGrid.checkCollision(this.mobile, collisionCallback.bind(this));
    }
}

function collisionCallback() {
    console.log("collisionCallback");
}

