import { World } from "../../../../rooms/World";
import { Position } from "../../../../schema/components/Position";
import { BaseMobileSchema } from "../../../../schema/mobiles/BaseMobileSchema";
import { BaseAtomicAction } from "../BaseAtomicAction";

interface SetTargetPayload {
    target: string;
}

export class SetTargetAction extends BaseAtomicAction {
    constructor(mobile: BaseMobileSchema, payload: SetTargetPayload, tick: number) {
        super(mobile, payload, tick);
    }
    execute(world: World, deltaTime: number) {
        this.mobile.tick = this.tick;
        this.mobile.target = this.payload.sessionId;
        console.log(this.payload.sessionId);
        let client = world.state.players.get(this.payload.sessionId);
        if(!client) {
            console.log('Target set to: null for ' + this.mobile.name + ' at tick ' + this.tick + '.')
            return;
        }
        
        console.log('Target set to: ' + client.name + ' for ' + this.mobile.name + ' at tick ' + this.tick + '.')
    }
}