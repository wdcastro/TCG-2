export class PlayerState {
  id;
  name;
  color;
  hand;
  deck;
  field;
  actionCount;
  constructor(name) {
    this.id = 1;
    this.actionCount = 1;
    this.name = name;
    this.color = "blue";
  }

  setField(field){
    this.field=field;
  }

  setHand(hand){
    this.hand = hand;
  }

  setDeck(deck){
    this.deck = deck;
  }
}
