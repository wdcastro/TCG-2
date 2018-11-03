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

  currentSession:GameSession = new GameSession();
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
        default:
        console.log(response.type);
      }
    });
  }




 newSession(){
    //start connection
    //initialize variables
    this.currentSession = new GameSession();
    this.field = new Field();


    //this.playerName="player a";
    //negotiate with server
    //on websocket
    this.processHandDealt();

    //negotiate with server
    //on websocket
    //this.nextTurn();
    this.comms.newSession(this.currentSession);
    //send next turn
  }

  joinSession(roomnumber){
    this.comms.joinSession(roomnumber);
  }

  startSession(){
    this.comms.startSession(this.currentSession);
  }

  showfield(){
    console.log(this.field);
    console.log(this.currentSession);
  }

  doAction(action,value){// this should only be used for animation purposes
    //TODO: this should be negotiated on server side
    if(this.currentSession.turnOrder[this.currentSession.turnPlayer] == this.currentSession.playerState.name){ //has authority?
      console.log("has authority");
      this.currentSession.playerState.actionCount--;
      console.log("Remaining Actions: "+this.currentSession.playerState.actionCount);
      switch(action.toLowerCase().trim()){
        case "playhand":

        //this.fieldList[this.currentSession.turnPlayer].playHandCard(value);
        break;
        case "playdefense":
        //this.fieldList[this.currentSession.turnPlayer].playDefenseCard(value);
        break;
        case "equip":
        break;
        case "power":
        break;
        case "draw":
        break;
        default:
        console.error("Unknown action "+action);
        console.error(action);
      }
      if(this.currentSession.playerState.actionCount<=0){
        this.comms.nextTurn(this.currentSession);
      }
    } else {
      console.log("no authority to perform action");
    }
  }

  //phases//
  //beginning phase
  executeBeginningPhase(){

    //TODO: this should be negotiated on server side
    console.log("BEGINNING PHASE");
    //if myturn
    //server request draw one card
    this.drawCard();
    this.gainActions();
  }

  drawCard(){

  }

  gainActions(){
    this.currentSession.playerState.actionCount++;
  }

  processHandDealt(){
    console.log("processing hand dealt");
  }

}
