import { Client } from "colyseus";
import { BaseMobileSchema } from "./BaseMobileSchema";
import { ClientInputData } from "../../interfaces/ClientInputData";



export class PlayerSchema extends BaseMobileSchema {
    client: Client;
    inputQueue: ClientInputData[];
    lastMoveTick: number = 0;
    
    constructor(client: Client, name = "") {
        super(name);
        this.client = client;
        this.inputQueue = [];
    }
}