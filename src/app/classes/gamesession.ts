import { PlayerState } from './playerstate';

export class GameSession {
  roomID;
  turnCount;
  turnPlayer;
  turnOrder;
  playerState;

  constructor(){
      this.roomID = 1;
      this.turnOrder=["john","jack"];
      this.turnPlayer = 0;
      this.turnCount = 0;
      this.playerState = new PlayerState("john");
  }
}
