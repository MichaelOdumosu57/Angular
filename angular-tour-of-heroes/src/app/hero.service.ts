// <!--9-->
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
// <!--12-->
import { Observable, of } from 'rxjs';
// <!---->
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
    /* <!--10-->
    / getHeroes(): Hero[] {
    /     return HEROES;
    / }
    <!----> */
    // <!--12-->
    getHeroes(): Observable<Hero[]> {
      return of(HEROES);
    }
    // <!---->
}
// <!---->
