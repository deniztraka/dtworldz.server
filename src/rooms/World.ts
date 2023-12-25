import { Room, Client } from "@colyseus/core";
import { PlayerSchema } from "../schema/mobiles/PlayerSchema";
import { InputData } from "../interfaces/InputData";
import { WorldState } from "../schema/WorldState";


export class World extends Room<WorldState> {
  private fixedTimeStep = 1000 / 50; // 50fps
  private currentTick = 0;

  onCreate(options: any) {
    this.setState(new WorldState());
    this.maxClients = 5;

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

  /**
     * This method is called on every fixed time step.
     *
     * @param {number} deltaTime
     * @memberof WorldRoom
     */
  fixedUpdate(deltaTime: number) {
    // const ticksPerSecond = 1000 / timeStep; // Calculate how many ticks are there in one second
    // console.log(deltaTime)
    this.state.players.forEach(player => {
        let input: InputData;
        
       
        // Dequeue player inputs
        while (input = player.inputQueue.shift()) {
            player.tick = input.tick;
            //console.log(input)
            player.speed = input.isRunning ? player.baseSpeed + 2 : player.baseSpeed;

            player.position.x += (input.horizontal * player.speed * deltaTime / 1000);
            player.position.y += (input.vertical * player.speed * deltaTime / 1000);
        }

        // console.log(player.position.x, player.position.y)
    });

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