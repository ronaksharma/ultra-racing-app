import {Injectable} from '@angular/Core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';

@Injectable()
export class HeroService{
    getHeroes(): Promise<Hero[]>{
        return Promise.resolve(HEROES);
       }
    
    getHeroesSlowly(): Promise<Hero[]>{
        return new Promise(resolve=> {
            setTimeout(() => resolve(this.getHeroes()), 100000);
        })
    }   
}