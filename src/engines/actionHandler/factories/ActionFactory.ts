import { ClientInputData } from "../../../interfaces/ClientInputData";
import { BaseMobileSchema } from "../../../schema/mobiles/BaseMobileSchema";
import { BaseClientAction } from "../models/BaseClientAction";
import { AttackAction } from "../models/atomicActions/AttackAction";
import { MoveAction } from "../models/atomicActions/MoveAction";
import { SetTargetAction } from "../models/atomicActions/SetTargetAction";

export class ActionFactory {
    static create(player: BaseMobileSchema, input: ClientInputData): BaseClientAction {
        switch (input.id) {
            case "move":
                return new MoveAction(player, input.payload, input.tick);
            case "attack":
                return new AttackAction(player, input.payload, input.tick);
            case "target":
                return new SetTargetAction(player, input.payload, input.tick);
            default:
                return null;
        }
    }
}