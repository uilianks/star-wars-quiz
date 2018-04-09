import { Component, OnInit, Input, Output } from '@angular/core';
import { GameService } from './game.service';
import { People } from '../domain/People';
import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator, ValidationErrors, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
   styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `],
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  collection: People[];
  closeResult: string;
  
  @Input() points: number = 0;

  constructor(private gameService: GameService, private modalService: NgbModal, ) { }

  ngOnInit() {
   this.gameService.getAllPeople().subscribe(
     data => {
       this.collection = data;
     }
   );
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  checkNames(item, check){
    if(!item.check){
      if(item.name === check){
        item.check = true;
        console.log("foi");
        this.points = this.points + 10;
        return true;
    }else{
      return false;
    }
    }else{
      return true;
    }
  }
 

}
