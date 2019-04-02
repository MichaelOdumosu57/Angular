import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
// <!--10-->
import { HeroService } from '../hero.service';
//<!---->
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
    // heroes = HEROES;
    // <!--10-->
    heroes: Hero[];
    //<!---->
    // selectedHero: Hero;
    // onSelect(hero: Hero): void {
    //   this.selectedHero = hero;
    // }
    /* <!--11-->
        getHeroes(): void {
          this.heroes = this.heroService.getHeroes();
        }
    <!----> */
    // <!--12-->
    getHeroes(): void {
        this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    }
    //<!---->
    // <!--10-->
    constructor(private heroService: HeroService) { }
    //<!---->
    ngOnInit() {
        // <!--11-->
        this.getHeroes();
        //<!---->
    }
    
    
}
