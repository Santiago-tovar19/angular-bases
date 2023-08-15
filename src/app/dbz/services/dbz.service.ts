import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 8500,
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 4000,
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 10000,
    },
  ];

  addCharacter(character: Character): void {
    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power,
    // };

    const newCharacter = { ...character, id: uuid() };
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  DeleteCharacterById(id: string) {
    console.log(id);
    this.characters = this.characters.filter((character) => {
      return character.id !== id;
    });
  }
  constructor() {}
}
