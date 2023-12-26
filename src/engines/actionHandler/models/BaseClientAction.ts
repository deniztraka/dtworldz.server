import { BaseMobileSchema } from "../../../schema/mobiles/BaseMobileSchema";

export abstract class BaseClientAction {
    mobile: BaseMobileSchema;
    payload: any;
    startTime: number;
    tick: number;
    constructor(mobile: BaseMobileSchema, payload: any, tick: number) {
        this.mobile = mobile;
        this.payload = payload;
        this.tick = tick;
        this.startTime = new Date().getTime();
    }
}