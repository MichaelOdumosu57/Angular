import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// <!--17-->
import { DashboardComponent }   from './dashboard/dashboard.component';
// <!---->
// <!--15-->
import { HeroesComponent }      from './heroes/heroes.component';
// <!---->
// <!--19-->
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
// <!---->
// <!--15-->
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  // <!--17-->
  { path: 'dashboard', component: DashboardComponent },
  // <!---->
  // <!--18-->
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // <!---->
  // <!--19-->
  { path: 'detail/:id', component: HeroDetailComponent },
  // <!---->
];
// <!---->
@NgModule({
  //   <!--15-->
  imports: [ RouterModule.forRoot(routes) ],
  // <!---->
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
