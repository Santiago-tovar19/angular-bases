import { Component } from '@angular/core';
import { NgFor, NgForOf, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  public heroesName: string[] = [
    'ironman',
    'spiderman',
    'hulk',
    'thor',
    'capitan america',
  ];

  public deleteHero?: string = '';

  removeLastHero(): void {
    this.deleteHero = this.heroesName.pop();
    console.log(this.deleteHero);
  }
}
