import { World } from "../../../rooms/World";
import { BaseMobileSchema } from "../../../schema/mobiles/BaseMobileSchema";
import { BaseClientAction } from "./BaseClientAction";

export abstract class BaseAtomicAction extends BaseClientAction {
    constructor(mobile: BaseMobileSchema, payload: any, tick: number) {
        super(mobile, payload, tick);
    }

    abstract execute(world: World, deltaTime: number):void
}