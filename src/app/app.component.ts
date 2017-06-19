import { Component, NgModule, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { StartComponent } from './start/start.component';
import { AppService } from './app.service';
import { EndComponent } from './end/end.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app works!';
  amount: number= null;
  turn: boolean = true;

  constructor( private _dialog: MdDialog,
                private _service: AppService) {}

  ngOnInit() {
    this._dialog.open(StartComponent);
    this._service.getPlayClickedEvent().subscribe(
      (item) => {
        this.amount = item;
        this._dialog.closeAll();
      }
    )
    this._service.getPlayAgainEvent().subscribe(
      () => {
        this.amount = null;
        this._dialog.closeAll();
        this._dialog.open(StartComponent);
      }
    )
  }

  take(x){
    this.amount-= x;
    if ( this.amount <= 1 ) {
      if (this.turn) {
        // user wins
        this._service.whoWin = "Wygrałeś! Brawo!";
        this._dialog.open(EndComponent);
      }else {
        // cpu wins
        this._service.whoWin = "Niestety, ale przegrałeś :(";
        this._dialog.open(EndComponent);
      }
    }else {
      this.turn= !this.turn;
      if (!this.turn) {
        setTimeout(()=>{ 
            this.cpuTurn();
        }, 2000);
      }
    }
  }

  cpuTurn(){
    if (this.amount % 3 === 0 ) {
      this.take(2);
    } else {
      this.take(1);
    }
  }
}
