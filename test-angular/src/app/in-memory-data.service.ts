import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    // THis variable will be the name on the api/[name]
    const heroes = [
      {id:11, name: "Dr Dice"},
      {id:12, name: "Deku"},
      {id:13, name: "Magneto"},
      {id:14, name: "Peep"},
      {id:15, name: "Isaac"},
      {id:16, name: "Wolverine"},
      {id:17, name: "Xavier"},
      {id:18, name: "Raven"},
      {id:19, name: "Jonesi"},
      {id:20, name: "Jonh"},       
    ];

    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
