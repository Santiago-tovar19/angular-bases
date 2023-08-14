import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ListaComponent } from './lista/lista.component';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [ListaComponent, HeroComponent],
  declarations: [ListaComponent, HeroComponent],
  imports: [CommonModule],
})
export class HeroesModule {}
