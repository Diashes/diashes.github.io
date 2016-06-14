import { OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

export class HeroListComponent implements OnInit 
{  
  constructor( private service: HeroService ) { }
  
  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit() { this.heroes = this.service.getHeroes(); }
  selectHero(hero: Hero) { this.selectedHero = hero; }
}