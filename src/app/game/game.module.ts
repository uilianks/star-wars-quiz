import { EndgameComponent } from './endgame/endgame.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { GameService } from './game.service';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [],
  providers: [GameService],
  declarations: [GameComponent, TimerComponent]
})
export class GameModule { }
