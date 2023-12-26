import { World } from "../../../rooms/World";
import { BaseMobileSchema } from "../../../schema/mobiles/BaseMobileSchema";
import { BaseClientAction } from "./BaseClientAction";

export abstract class BaseOngoingAction extends BaseClientAction {
    elapsedTime: number;
    duration: number;
    constructor(mobile: BaseMobileSchema, payload: any, tick:number, duration: number) {
        super(mobile, payload, tick);
        this.elapsedTime = 0;
        this.duration = duration;
    }
    abstract update(world: World, deltaTime: number): void;

    abstract onCompleted(world: World): void;
}