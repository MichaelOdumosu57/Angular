import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// <!--15-->
import { HeroesComponent }      from './heroes/heroes.component';
// <!---->
// <!--15-->
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];
// <!---->
@NgModule({
  //   <!--15-->
  imports: [ RouterModule.forRoot(routes) ],
  // <!---->
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
