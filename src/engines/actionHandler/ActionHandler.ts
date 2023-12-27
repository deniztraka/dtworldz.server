import { World } from "../../rooms/World";
import { BaseAtomicAction } from "./models/BaseAtomicAction";
import { BaseClientAction } from "./models/BaseClientAction";
import { BaseOngoingAction } from "./models/BaseOngoingAction";

export class ActionHandler {
    ongoingActions: BaseOngoingAction[] = [];
    atomicActions: BaseAtomicAction[] = [];
    world: World;
    constructor(world: World) {
        this.world = world;
    }

    handle(action: BaseClientAction) {
        if (action instanceof BaseAtomicAction) {
            this.atomicActions.push(action);
        } else if (action instanceof BaseOngoingAction) {
            this.ongoingActions.push(action);
        } else {
            console.log("Unknown action type")
        }
    }

    update(deltaTime: number) {
        const currentTime = new Date().getTime();
        // Update ongoing actions using a reverse for-loop
        for (let i = this.ongoingActions.length - 1; i >= 0; i--) {
            const action = this.ongoingActions[i];

            if (currentTime >= action.startTime + action.elapsedTime) {
                //console.log(`Action details: startTime=${action.startTime}, elapsedTime=${action.elapsedTime}, duration=${action.duration}`);


                action.update(this.world, deltaTime);
                action.elapsedTime += deltaTime;

                // Remove action if completed
                if (action.elapsedTime >= action.duration) {
                    action.onCompleted(this.world);
                    this.ongoingActions.splice(i, 1);
                }
            }
        }

        // Execute atomic actions
        while (this.atomicActions.length > 0) {
            const action = this.atomicActions.shift();
            action.execute(this.world, deltaTime);
        }
    }
}