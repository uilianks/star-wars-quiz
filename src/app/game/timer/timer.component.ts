import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  ticks = 0;
  constructor(private router: Router) { }

  ngOnInit() {
    let timer = Observable.timer(2000,1000);
    timer.subscribe(t => this.tickerFunc(t));
    
  }
  tickerFunc(tick){
    this.ticks = tick
    if( tick > 120 ){
        this.router.navigate(["/endgame"]);
    }
  }

}
