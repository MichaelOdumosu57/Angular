// <!--8-->
import { Component, OnInit, Input } from '@angular/core';
// <!---->
import { Hero } from '../hero';

// <!--20-->
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';
// <!---->

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    // <!--8-->
    @Input() hero: Hero;
    // <!---->
    constructor(
        // <!--20-->
        private route: ActivatedRoute,
        private heroService: HeroService,
        private location: Location
        // <!---->
    ) { }
    
    // <!--20-->
    getHero(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
    }
    // <!---->
    // <!--21-->
    goBack(): void {
      this.location.back();
    }
    // <!---->
    
    ngOnInit() {
        // <!--20-->
        this.getHero();
        // <!---->
    }
    

}
