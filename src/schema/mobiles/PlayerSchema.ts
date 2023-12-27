import { Client } from "colyseus";
import { BaseMobileSchema } from "./BaseMobileSchema";
import { ClientInputData } from "../../interfaces/ClientInputData";



export class PlayerSchema extends BaseMobileSchema {
    client: Client;
    inputQueue: ClientInputData[];
    lastMoveTick: number = 0;
    
    constructor(client: Client, name = "", x = 10, y = 10) {
        super(client.sessionId, name, x, y);
        this.client = client;
        this.inputQueue = [];
    }
}