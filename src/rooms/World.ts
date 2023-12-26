import { Room, Client } from "@colyseus/core";
import { PlayerSchema } from "../schema/mobiles/PlayerSchema";
import { ClientInputData } from "../interfaces/ClientInputData";
import { WorldState } from "../schema/WorldState";
import { ActionHandler } from "../engines/actionHandler/ActionHandler";
import { ActionFactory } from "../engines/actionHandler/factories/ActionFactory";
export class World extends Room<WorldState> {
  private fixedTimeStep = 1000 / 50; // 50fps
  private currentTick = 0;
  actionHandler: ActionHandler;
  actionFactory: ActionFactory;

  onCreate(options: any) {
    this.setState(new WorldState());
    this.actionHandler = new ActionHandler(this);
    this.actionFactory = new ActionFactory();
    this.maxClients = 5;

    this.attachGameEvents();

    // handle player input
    this.onMessage("move", (client, input) => {
      const player = this.state.players.get(client.sessionId);
      if (!player) return;
      //console.log(input)
      player.inputQueue.push(input);
    });


    // defining fixed update loop in here
    let elapsedTime = 0;
    this.setSimulationInterval((deltaTime) => {
      elapsedTime += deltaTime;

      while (elapsedTime >= this.fixedTimeStep) {
        elapsedTime -= this.fixedTimeStep;
        this.fixedUpdate(deltaTime);
      }
    });
  }

  attachGameEvents() {
    this.onMessage("ca_action", (client, input) => {
      const player = this.state.players.get(client.sessionId);
      if (!player) return;
      //console.log(input)
      player.inputQueue.push(input);
    });

  }

  fixedUpdate(deltaTime: number) {

    this.state.players.forEach(player => {
      let input: ClientInputData | undefined;

      while (input = player.inputQueue.shift()) {
        var action = ActionFactory.create(player, input);
        this.actionHandler.handle(action);
      }
    });

    this.actionHandler.update(deltaTime);
    this.currentTick++;
  }





  onJoin(client: Client, options: { name: string }, _auth: any) {
    console.log(`${client.sessionId} | ${options.name} is joined!`);
    const player = new PlayerSchema(client, options.name);
    // add player to the state
    this.state.players.set(client.sessionId, player);
  }

  onLeave(client: Client, consented: boolean) {
    // console.log(client.sessionId, "left!");
    if (this.state.players.has(client.sessionId)) {
      console.log(client.sessionId + " | " + this.state.players.get(client.sessionId).name + " is left");
      this.state.players.delete(client.sessionId);
    }
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

}
