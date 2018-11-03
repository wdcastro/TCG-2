import { Card } from '../classes/card';

export class Field {
  decks=[];
  activecards=[];
  discardpile=[];
  defensezone=[];
  hands=[];
  buffs=[];
  actioncounts=[];
  charactercards=[];
  weapons=[];
  hp=[];



  addToActiveCards(card){
    //this.clearActiveCards();
    console.log("ADDING CARD TO PLAY AREA");
    console.log(card);
    this.activecards.push(card);
  }

  clearActiveCards(){
    console.log("CLEARING PLAY AREA");
    for(let card of this.activecards){
      this.discardpile.push(card);
    }
    this.activecards = [];
  }

  getActiveCards(){
    return this.activecards;
  }

  addHands(cards){
    for(let card of cards){
      this.hands.push(card);
    }
  }

  setHands(cards){
    this.hands = cards;
  }

  getHands(){
    return this.hands;
  }

  playHandCard(index){
  }

  setDefenseCard(card){
  }

  getDefenseZone(){
    return this.defensezone;
  }

  playDefenseCard(index){
  }

  getDiscardPile(){
    return this.discardpile;
  }

  showInfo(card){
    console.log(card);
  }
}
