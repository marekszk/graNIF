import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  amount: number;
  constructor( private _service: AppService) { }

  ngOnInit() {
  }

  play() {
    // console.log(this.amount);
    this._service.click(this.amount);
  }

}
