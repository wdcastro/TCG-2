import { Injectable } from '@angular/core';


import * as io from 'socket.io-client';
import { Observable, Observer, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommsService {

  private url = 'http://localhost:8080';
  private socket;
  observer;

  constructor() {

  }

  connect(){
    console.log("in connect");
    this.socket = io(this.url);

    let observable = new Observable(observer => {
      this.socket.on('action', (data) => {
        observer.next({type:'action', data:data});
      });

      this.socket.on('new turn', (data) => {
        observer.next({type:'new turn', data:data});
      });

      this.socket.on('session start', (data) => {
        observer.next({type:'session start', data:data});
      });

      this.socket.on('your field', (data) => {
        observer.next({type:'your field', data:data});
      });

      this.socket.on('message', (data) => {
        observer.next({type:'message', data:data});
      });
    })

    return observable;
  }

    playHandCard(action, card){

    }

    sendMsg(msg){
      this.socket.emit('message',msg);
    }

    joinRoom(room){
      console.log("subscribing to "+room);
      this.socket.emit('subscribe',room);
    }

    nextTurn(session){
      this.socket.emit('end turn', session);
    }

    newSession(session){
      this.joinRoom(session.roomID);
      this.socket.emit('new session', session);

    }

    joinSession(sessionID){
      this.joinRoom(sessionID);
      this.socket.emit('join session', sessionID);
    }

    startSession(session){
      this.socket.emit('start session', session);
    }
}
