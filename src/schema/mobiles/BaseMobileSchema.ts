import { Schema, type, ArraySchema, filter } from "@colyseus/schema";
import { Position } from "../components/Position";
import { PlayerSchema } from "./PlayerSchema";
import { Health } from "../components/Health";
import { Energy } from "../components/Energy";
import { Direction } from "../../models/Direction";
import { Attacking } from "../components/Attacking";

export abstract class BaseMobileSchema extends Schema {
    @type("string") sessionId: string = "";
    @type("string") name: string = "";
    @type("number") speed: number;
    @type("boolean") isRunning: boolean;
    @type("boolean") isMoving: boolean;
    @type(Position) position: Position;
    @type("string") target: string;
    @type(Health) health: Health;
    @type(Energy) energy: Energy;
    @type("number") dexterity: number;
    @type("number") strength: number;
    @type("number") intelligence: number;
    @type("number") tick: number;
    @type("number") private _direction: number;
    @type(Attacking) attacking: Attacking;
    get direction(): Direction {
        return this._direction;
    }
    set direction(value: Direction) {
        this._direction = value;
    }
    baseSpeed: number = 1;

    constructor(sessionId: string, name: string = "", x: number = 10, y: number = 10) {
        super();
        this.sessionId = sessionId;
        this.name = name;
        this.speed = this.baseSpeed; // 1 = 1 tile per second
        this.position = new Position(x, y);
        this.isRunning = false;
        this.health = new Health(100);
        this.energy = new Energy(100);
        this._direction = Direction.South;
        this.attacking = new Attacking();
    }

    tryTakeDamage(target: PlayerSchema) {
        if(this.attacking.isAttacking) {
            console.log(this.name + " is already attacking");
            return;
        }
        if(this.attacking.cooldownTimer > 0) {
            console.log(this.name + " is on cooldown");
            return;
        }

        //console.log(this.name + " tries to take damage from " + target.name);
        this.attacking.isAttacking = true;
        this.attacking.cooldownTimer = this.attacking.cooldown;
        //console.log(this.name + " isAttacking: " + this.attacking.isAttacking);
        target.health.currentValue -= this.attacking.power;
        //console.log(this.name + " took damage from " + target.name);
        //console.log(this.name + " health: " + target.health.currentValue);
    }

    update(deltaTime: number) {
        // update cooldowns
        // update attacking cooldown
        if(this.attacking.cooldownTimer > 0) {
            this.attacking.cooldownTimer -= deltaTime;
        }
        if(this.attacking.cooldownTimer < 0) {
            this.attacking.cooldownTimer = 0;
        }
        // update attacking state
        if(this.attacking.cooldownTimer == 0) {
            this.attacking.isAttacking = false;
        }

        //console.log(this.name + " isAttacking: " + this.attacking.isAttacking);
    }
}