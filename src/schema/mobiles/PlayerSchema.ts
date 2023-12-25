import { Client } from "colyseus";
import { BaseMobileSchema } from "./BaseMobileSchema";
import { InputData } from "../../interfaces/InputData";



export class PlayerSchema extends BaseMobileSchema {
    client: Client;
    inputQueue: InputData[];
    lastMoveTick: number = 0;
    
    constructor(client: Client, name = "") {
        super(name);
        this.client = client;
        this.inputQueue = [];
    }
}