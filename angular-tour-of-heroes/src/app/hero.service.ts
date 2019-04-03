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
// <!--22-->
import { HttpClient, HttpHeaders } from '@angular/common/http';
// <!---->
// <!--23-->
import { catchError, map, tap } from 'rxjs/operators';
// <!---->
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
//make sure the decorator comes right before the class nothing in between
@Injectable({
  providedIn: 'root'
})
export class HeroService {
    // <!--13-->
    constructor(
        private messageService: MessageService,
        // <!--22-->
        private http: HttpClient,
        // <!---->

        ) {}
    private log(message: string) {
      this.messageService.add(`HeroService: ${message}`);
    }
    private heroesUrl = 'api/heroes';  // URL to web api
    // getHeroes (): Observable<Hero[]> {
    //     return this.http.get<Hero[]>(this.heroesUrl)
    // }
    //<!--23-->
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
     
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
     
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
     
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
    // getHeroes (): Observable<Hero[]> {
    //   return this.http.get<Hero[]>(this.heroesUrl)
    //     .pipe(
    //       catchError(this.handleError<Hero[]>('getHeroes', []))
    //     );
    // }
    // <!---->
    // <!--24-->
    getHeroes (): Observable<Hero[]> {
      return this.http.get<Hero[]>(this.heroesUrl)
        .pipe(
          tap(_ => this.log('fetched heroes')),
          catchError(this.handleError<Hero[]>('getHeroes', []))
        );
    }
    updateHero (hero: Hero): Observable<any> {
      return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
        tap(_ => this.log(`updated hero id=${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
      );
    }
    // <!---->
    // <!--25-->
    addHero (hero: Hero): Observable<Hero> {
      return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
        tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
        catchError(this.handleError<Hero>('addHero'))
      );
    }
    // <!---->
    // <!--26-->
    deleteHero (hero: Hero | number): Observable<Hero> {
      const id = typeof hero === 'number' ? hero : hero.id;
      const url = `${this.heroesUrl}/${id}`;
    
      return this.http.delete<Hero>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted hero id=${id}`)),
        catchError(this.handleError<Hero>('deleteHero'))
      );
    }
    // <!---->
    // <!--27-->
    searchHeroes(term: string): Observable<Hero[]> {
      if (!term.trim()) {
        // if not search term, return empty hero array.
        return of([]);
      }
      return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
        tap(_ => this.log(`found heroes matching "${term}"`)),
        catchError(this.handleError<Hero[]>('searchHeroes', []))
      );
    }
    // <!---->
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
    // getHeroes(): Observable<Hero[]> {
    //     //TODO: send the message _after_ fetching the heroes
    //     this.messageService.add('HeroService: fetched heroes');
    //     return of(HEROES);
    // }
    // <!---->
    // <!--20-->
    // getHero(id: number): Observable<Hero> {
    //   // TODO: send the message _after_ fetching the hero
    //   this.messageService.add(`HeroService: fetched hero id=${id}`);
    //   return of(HEROES.find(hero => hero.id === id));
    // }
    // <!---->
    // <!--24-->
    getHero(id: number): Observable<Hero> {
      const url = `${this.heroesUrl}/${id}`;
      return this.http.get<Hero>(url).pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
    }
    // <!---->
}
// <!---->