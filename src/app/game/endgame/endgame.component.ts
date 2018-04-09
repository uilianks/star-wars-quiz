import { GameComponent } from './../game.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-endgame',
  templateUrl: './endgame.component.html',
  styleUrls: ['./endgame.component.css']
})
export class EndgameComponent implements OnInit {
  
  points: number;

  constructor() { }

  ngOnInit() {
  }

}
