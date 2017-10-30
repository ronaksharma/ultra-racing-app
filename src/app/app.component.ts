import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Hero} from './Hero';
import {HeroService} from './hero.service';



const SIDE_HEROES: Hero[] = [
  {id: 21, name: "Side Hero", lastName: "John", address: [{state: 'Washington'}]}
]
@Component({
  selector: 'app-root',
  template: `
          <a href="https://angular.io/tutorial/">Angular 2 Tutorials</a>
            <h1>{{title}}</h1>
          <div>
          <h2>My Heroes</h2>
          <ul class="heroes">
            <li *ngFor="let hero of heroes; let i = index"  (click)="onSelect(hero)"
              [class.selected]="hero === selectedHero">
              <span class="badge">{{hero.id}}</span> {{hero.name}}
              
            </li>
          </ul>
         
          <heroDetail [hero]="selectedHero"></heroDetail>
          `,
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {
  constructor(private heroService: HeroService){
    this.heroes = this.heroService.getHeroes();
  };
  title = 'Tour of heroes';
  selectedHero: Hero ;
  heroes: Hero[];
  sideHeroes = SIDE_HEROES;
  onSelect(hero: Hero) : void{
    this.selectedHero = hero;
  } 
}
  