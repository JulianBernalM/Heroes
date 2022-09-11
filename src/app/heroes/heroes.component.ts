import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  // Propiedad del componente llamada heroes para exponer la matriz
  public heroes = HEROES;
  public img: string = 'https://cdn-3.expansion.mx/dims4/default/a017412/2147483647/strip/true/crop/362x217+0+0/resize/1200x719!/format/webp/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2Fmedia%2F2015%2F04%2F29%2Fimageedit94629467394.jpg';

  // Click event controller (A component property is assigned)
  public selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  // Click event controller (method that assigns the clicked hero to the selectedHero file)
  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
