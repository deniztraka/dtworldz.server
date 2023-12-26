import { ClientInputData } from "../../../interfaces/ClientInputData";
import { BaseMobileSchema } from "../../../schema/mobiles/BaseMobileSchema";
import { BaseClientAction } from "../models/BaseClientAction";
import { MoveAction } from "../models/atomicActions/MoveAction";

export class ActionFactory {
    static create(player: BaseMobileSchema, input: ClientInputData): BaseClientAction {
        switch (input.id) {
            case "move":
                return new MoveAction(player, input.payload, input.tick);
            default:
                return null;
        }
    }
}