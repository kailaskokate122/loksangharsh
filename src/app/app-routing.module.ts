import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'home',
  component: HomeComponent
}, {
  path: "page-not-found",
  component: PageNotFoundComponent
}, {
  path: "404",
  component: PageNotFoundComponent
}, {
  path: "**",
  redirectTo: "404"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
