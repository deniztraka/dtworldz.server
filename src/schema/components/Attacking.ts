import { Schema, type } from "@colyseus/schema";

export class Attacking extends Schema {
    @type("number") power: number;
    @type("number") swingSpeed: number;
    @type("number") range: number;
    @type("number") cooldown: number;
    @type("number") cooldownTimer: number;
    @type("boolean") isAttacking: boolean;

    constructor(power = 10, swingSpeed = 0.5, range = 1) {
        super();
        this.power = power;
        this.swingSpeed = swingSpeed;
        this.range = range;
        this.cooldown = 1000 * swingSpeed - 100;
        this.cooldownTimer = 0;
    }
}