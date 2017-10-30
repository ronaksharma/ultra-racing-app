import {Injectable} from '@angular/Core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';

@Injectable()
export class HeroService{
    getHeroes(): Hero[] {
        return HEROES;
    };
}