import { Component, OnInit } from '@angular/core';
import { GameOperatorService } from '../services/game-operator.service';

@Component({
  selector: 'app-lobbymenu',
  templateUrl: './lobbymenu.component.html',
  styleUrls: ['./lobbymenu.component.css']
})
export class LobbyMenuComponent implements OnInit {

  constructor(public gameoperator:GameOperatorService) { }

  ngOnInit() {

  }

}
