import { Schema, MapSchema, type } from "@colyseus/schema";
import { PlayerSchema } from "./mobiles/PlayerSchema";
import { SpatialGrid } from "../engines/grid/SpatialGrid";

export class WorldState extends Schema {
    @type({ map: PlayerSchema }) players = new MapSchema<PlayerSchema>();
    height: number;
    width: number;
    spatialGrid: SpatialGrid;
    constructor(width: number, height: number, gridSize: number) {
        super();
        this.width = width;
        this.height = height;
        
        this.spatialGrid = new SpatialGrid(width, height, gridSize);
    }
}
