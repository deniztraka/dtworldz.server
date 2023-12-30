import { Schema, type } from "@colyseus/schema";

export class Health extends Schema {
    @type("number") currentValue: number;
    @type("number") maxValue: number;
    constructor(currentValue = 100, maxValue = 100) {
        super();
        this.currentValue = currentValue;
        this.maxValue = maxValue;
    }
}