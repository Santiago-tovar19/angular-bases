import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>{{ counter }}</h2>

    <button (click)="increment(2)">Incrementar</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decrement(2)">Decrementar</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increment(value: number): void {
    this.counter = this.counter + value;
  }

  decrement(value: number): void {
    this.counter = this.counter - value;
  }

  reset(): void {
    this.counter = 10;
  }
  constructor() {}
}
