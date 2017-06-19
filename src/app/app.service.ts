import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AppService {

  public playClicked$: EventEmitter<number> = new EventEmitter();
  public playAgain$: EventEmitter<any> = new EventEmitter();
  public whoWin: string = null;
  constructor() { }

  public click(item: number): void {
    // console.log(item);
    this.playClicked$.emit(item);
  }

  getPlayClickedEvent() {
    return this.playClicked$;
  }

  public clickAgain(): void {
    // console.log(item);
    this.playAgain$.emit(null);
  }

  getPlayAgainEvent() {
    return this.playAgain$;
  }
}
