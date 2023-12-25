import { Schema, MapSchema, type } from "@colyseus/schema";
import { PlayerSchema } from "./mobiles/PlayerSchema";

export class WorldState extends Schema {
    @type({ map: PlayerSchema }) players = new MapSchema<PlayerSchema>();
    constructor() {
        super();
    }
}
