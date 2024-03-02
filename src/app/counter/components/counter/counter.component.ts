import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `

    <p>Contador: {{ counter }}</p>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset(40)">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>

  `
})
export class CounterComponent{
  
  public counter: number = 40;

  increaseBy(value: number){
    this.counter += value;
  }

  reset(valueReset: number): void{
    this.counter = valueReset;
  }
}
