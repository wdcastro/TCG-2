import { Injectable } from '@angular/core';
import { Card } from '../classes/card';
import { Deck } from '../classes/deck';
import { Field } from '../classes/field';
import { GameSession } from '../classes/gamesession';

import { CommsService } from './comms.service';

@Injectable({
  providedIn: 'root'
})
export class GameOperatorService {

  //currentSession:GameSession = new GameSession();
  gameState;
  gameTicket;
  field;
  sessionObserver;

  constructor(private comms:CommsService) {
    this.sessionObserver= this.comms.connect()
    .subscribe((response:any) => {
      switch(response.type){
        case "action":
        console.log("new action");
        console.log(response.data);
        break;
        case "new turn":
        console.log("new turn");
        console.log("Turn player is: "+ response.data);
        break;
        case "session start":
        console.log("session start");
        console.log("Initializing session...");
        console.log(response.data);
        break;
        case "your field":
        console.log("field info");
        console.log(response.data);
        this.field = response.data;
        break;
        case "message":
        console.log(response.data);
        break;
        case "game state":
        console.log(response.data);
        this.gameState = response.data;
        break;
        case "game ticket":
        console.log(response.data);
        console.log("my index is "+response.data.turnIndex);
        this.gameTicket = response.data;
        break;
        default:
        console.log(response.type);
      }
    });
  }




 newSession(name, sessionID){
    //start connection
    //initialize variables
    //this.currentSession = new GameSession();
    this.field = new Field();

    this.comms.newSession(name, sessionID);

  }

  joinSession(name, sessionID){
    this.comms.joinSession(name, sessionID);
  }

  startSession(){
    console.log("starting session"+this.gameTicket.sessionID);
    this.comms.startSession(this.gameTicket.sessionID);
  }

  showfield(){
    console.log(this.field);
    //console.log(this.currentSession);
  }

  playCard(location,playerindex,cardindex){
    this.comms.playCard(this.gameTicket.sessionID, location, playerindex, cardindex);
  }

  //phases//
  //beginning phase
}
