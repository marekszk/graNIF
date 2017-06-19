import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {

  whoWon: string;
  constructor( private _service: AppService) { }

  ngOnInit() {
    this.whoWon = this._service.whoWin;
  }

  playAgain(){
    this._service.clickAgain();
  }

}
