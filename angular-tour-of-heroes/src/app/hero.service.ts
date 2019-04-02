// <!--9-->
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
// <!--13-->
import { MessageService } from './message.service';
// <!---->
// <!--12-->
import { Observable, of } from 'rxjs';
// <!---->
@Injectable({
  providedIn: 'root'
})
export class HeroService {
    // <!--13-->
    constructor(private messageService: MessageService) {}
    // <!---->
//  constructor() { }
    /* <!--10-->
    / getHeroes(): Hero[] {
    /     return HEROES;
    / }
    <!----> */
    // <!--12-->
    // getHeroes(): Observable<Hero[]> {
    //     return of(HEROES);
    // }
    // <!---->
    // <!--13-->
    getHeroes(): Observable<Hero[]> {
        //TODO: send the message _after_ fetching the heroes
        this.messageService.add('HeroService: fetched heroes');
        return of(HEROES);
    }
    // <!---->
    // <!--20-->
    getHero(id: number): Observable<Hero> {
      // TODO: send the message _after_ fetching the hero
      this.messageService.add(`HeroService: fetched hero id=${id}`);
      return of(HEROES.find(hero => hero.id === id));
    }
// <!---->
}
// <!---->
