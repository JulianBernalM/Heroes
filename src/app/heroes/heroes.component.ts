import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']  
})
export class HeroesComponent implements OnInit {
  // Propiedad del componente hero de tipo Hero:
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'

  // };

  // Propiedad del componente llamada heroes para exponer la matriz
  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

}
